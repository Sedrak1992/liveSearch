import MOCK_DATA from "../MOCK_DATA 10.38.02.json";
import { useState, useEffect } from "react";
import "./style.css";

const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({ last_name }) =>
    last_name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const data = MOCK_DATA;

const CarList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [carList, setCarList] = useState(data);

  useEffect(() => {
    // const Debounce = setTimeout(() => {
    const filteredCars = filterCars(searchTerm, data);
    setCarList(filteredCars);
    // }, 200);
    console.log(searchTerm);
    return () => clearTimeout(filteredCars);
  }, [searchTerm]);
  return (
    <div className="boxList">
      <h1>живой поиск</h1>
      <div>
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="поиск по имени"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {carList.map((car, index) => {
            return (
              <li key={index}>
                <div>
                  <h2>{car.id}</h2>
                  <div>
                    {" "}
                    {car.first_name} {car.last_name}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CarList;
