import './App.css';
import React, { useState } from "react";
import UserDetails  from './UserDetails';


// root.render(<UserDetails/>)

export default function App(){
    return (
        <UserDetails/>
    )
}


// function App() {

//     const data = [{name: "Akash", age: 21, gender: "Male", roll_number: "2019MEB1235"},
//     {name: "Sujata", age: 20, gender: "Female", roll_number: "2019CEB1352"},
//     {name: "Rajeev", age: 22, gender: "Male", roll_number: "2018CEB1441"},
//     {name: "Sonali", age: 21, gender: "Female", roll_number: "2020CSEB1902"},
//     {name: "Azhar", age: 23, gender: "Male", roll_number: "2017CSEB0110"}
// ];


// const userData = [
//     {firstName: "Azhar", lastName: "Choudhury", age: 25, employee_ID: 13406531, email_ID: "azhar.m.choudhury@accenture.com" },
//     {firstName: "Rajeev", lastName: "Ranjan", age: 26, employee_ID: 13406550, email_ID: "rajeev.ranjan@accenture.com" },
//     {firstName: "Abhirup", lastName: "Roy", age: 25, employee_ID: 13406290, email_ID: "abhirup.roy@accenture.com" },
//     {firstName: "Abhishek", lastName: "Paul", age: 25, employee_ID: 13406602, email_ID: "abhishek.paul@accenture.com" },
//     {firstName: "Krishanu", lastName: "Dutta", age: 25, employee_ID: 13402783, email_ID: "krishanu.dutta@accenture.com" },
//     {firstName: "Bhargav", lastName: "Bhattacharya", age: 25, employee_ID: 13406532, email_ID: "bhargav.bhattacharya@accenture.com" },
// ];

// return (
    // <div className="App">


    //     <div className="user-table">
            
    //     <h1 className='heading'>User Table</h1>

    //     <table>
    //         <thead>
    //             <tr className='table-heading'>
    //                 <th>First Name</th>
    //                 <th>Last Name</th>
    //                 <th>Age</th>
    //                 <th>Employee ID</th>
    //                 <th>E-Mail ID</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {userData.map((value, key) => {
    //                 return(
    //                     <tr key={key}>
    //                         <td>{value.firstName}</td>
    //                         <td>{value.lastName}</td>
    //                         <td>{value.age}</td>
    //                         <td>{value.employee_ID}</td>
    //                         <td>{value.email_ID}</td>
    //                     </tr>
    //                 )
    //             })}
    //         </tbody>
    //     </table>
        
    //     </div>



        {/* <h1>Students' Table</h1>

        <table>
            <thead style = {{backgroundColor: "green", color: "white"}}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Roll Number</th>
                </tr>
            </thead> */}

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
{/* 
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

        </table> */}
    // </div> 


// );
// }







// export default App;