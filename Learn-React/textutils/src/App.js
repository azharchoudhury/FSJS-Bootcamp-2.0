import './App.css';
import React, { useState } from "react";

function App() {

    const data = [{name: "Akash", age: 21, gender: "Male", roll_number: "2019MEB1235"},
    {name: "Sujata", age: 20, gender: "Female", roll_number: "2019CEB1352"},
    {name: "Rajeev", age: 22, gender: "Male", roll_number: "2018CEB1441"},
    {name: "Sonali", age: 21, gender: "Female", roll_number: "2020CSEB1902"},
    {name: "Azhar", age: 23, gender: "Male", roll_number: "2017CSEB0110"}
];


return (
    <div className="App">

        <h1>Students' Table</h1>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Roll Number</th>
                </tr>
            </thead>

            {/* <tbody>
                <tr>
                    <td>Akash</td>
                    <td>21</td>
                    <td>Male</td>
                    <td>2019MEB1235</td>
                </tr>
                <tr>
                    <td>Sujata</td>
                    <td>20</td>
                    <td>Female</td>
                    <td>2019CEB1352</td>
                </tr> <tr>
                    <td>Rajeev</td>
                    <td>22</td>
                    <td>Male</td>
                    <td>2018CEB1441</td>
                </tr> <tr>
                    <td>Sonali</td>
                    <td>21</td>
                    <td>Female</td>
                    <td>2020CSEB1902</td>
                </tr>
                <tr>
                    <td>Azhar</td>
                    <td>23</td>
                    <td>Male</td>
                    <td>2017CSEB0110</td>
                </tr>
            </tbody> */}

            <tbody>
                {data.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.gender}</td>
                            <td>{value.roll_number}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>


    </div> 
);
}







export default App;