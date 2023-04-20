import React, { useState, useEffect, useReducer } from "react";
import "./LoadTableShip.css";
import Axios from "axios";
import axios from "axios";

function LoadTableShip() {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [columnNumber, setColumnNumber] = useState("");
  const [equimentType, setEquimentType] = useState("");
  const [originCity, setOriginCity] = useState("");
  const [originState, setOriginState] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [destinationState, setDestinationState] = useState("");
  const [miles, setMiles] = useState("");
  const [truckCost, setTruckCost] = useState("");
  const [type, setType] = useState("");

  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/get")
      .then((response) => setOrder(response.data));
  });

  const submitJob = () => {
    Axios.post("http://localhost:3001/api/submit", {
      email: email,
      date: date,
      columnNumber: columnNumber,
      equimentType: equimentType,
      originCity: originCity,
      originState: originState,
      destinationCity: destinationCity,
      destinationState: destinationState,
      miles: miles,
      truckCost: truckCost,
      type: type,
    }).then(() => {
      alert("Job Posted");
    });
  };
  return (
    <>
      <div className="loadboard">
        <h1>Load Board - Shipper</h1>
        <h2>Create New Post</h2>
        <form className="submission">
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required="requried"
            placeholder="Input Email"
          />
          <input
            type="date"
            name="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required="requried"
            placeholder="Date"
          />
          <input
            type="number"
            name="columnNumber"
            onChange={(e) => {
              setColumnNumber(e.target.value);
            }}
            required="requried"
            placeholder="Column Number"
          />
          <input
            type="text"
            name="equimentType"
            onChange={(e) => {
              setEquimentType(e.target.value);
            }}
            required="requried"
            placeholder="Equiment Type"
          />
          <input
            type="text"
            name="originCity"
            onChange={(e) => {
              setOriginCity(e.target.value);
            }}
            required="requried"
            placeholder="Origin City"
          />
          <input
            type="text"
            name="originState"
            onChange={(e) => {
              setOriginState(e.target.value);
            }}
            required="requried"
            placeholder="Origin State"
          />
          <input
            type="text"
            name="destinationCity"
            onChange={(e) => {
              setDestinationCity(e.target.value);
            }}
            required="requried"
            placeholder="Destination City"
          />
          <input
            type="text"
            name="destinationState"
            onChange={(e) => {
              setDestinationState(e.target.value);
            }}
            required="requried"
            placeholder="Destination State"
          />
          <input
            type="Number"
            name="miles"
            onChange={(e) => {
              setMiles(e.target.value);
            }}
            required="requried"
            placeholder="Miles"
          />

          <input
            type="Number"
            name="truckCost"
            onChange={(e) => {
              setTruckCost(e.target.value);
            }}
            required="requried"
            placeholder="Truck Cost"
          />
          <input
            type="text"
            name="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
            required="requried"
            placeholder="Type Ex.Broker"
          />
          <button onClick={submitJob}>Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Date Available</th>
              <th>Column Number</th>
              <th>Equiment Type</th>
              <th>Origin City</th>
              <th>Origin State</th>
              <th>Destination City</th>
              <th>Destination State</th>
              <th>Miles</th>
              <th>Truck Cost</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {order.map((val) => {
              return (
                <tr>
                  <td>{val.Email}</td>
                  <td>{val.DateAvailable}</td>
                  <td>{val.CoNumber}</td>
                  <td>{val.EquipmentType}</td>
                  <td>{val.OriginCity}</td>
                  <td>{val.OriginState}</td>
                  <td>{val.DestinationCity}</td>
                  <td>{val.DestinationState}</td>
                  <td>{val.Miles}</td>
                  <td>{val.TruckCost}</td>
                  <td>{val.Type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LoadTableShip;
