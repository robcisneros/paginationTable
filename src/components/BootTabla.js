import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { useSelector } from "react-redux";

const BootTable = () => {
  const weatherData = useSelector((state) => state.weatherData);
  console.log("TABLA RUNNING");
  return (
    <div>
      <h2>Datos atmosféricos</h2>
      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>CityId</th>
            <th>City</th>
            <th>State</th>
            <th>Probably Of Precip</th>
            <th>Relative Humidity</th>
            <th>Last Report(YYYY/MM/DD)</th>
            <th>Llueve</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((item, index) => (
            <tr key={index} >
              <td>{index + 1}</td>
              <td>{item.city} </td>
              <td>{item.name}</td>
              <td>{item.statew}</td>
              <td>{item.pop}</td>
              <td>{item.relhum}</td>
              <td>{item.lrt}</td>
              <td>{(item.pop>60 || item.relhum>50) ? 'YES' : 'NO'}</td> 
            </tr>
          ))}
        </tbody>
      </ReactBootstrap.Table>
    </div>
  );
};
export default React.memo(BootTable);
