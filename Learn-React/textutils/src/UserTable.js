import React from "react";
import './App.css'
import { Table } from "react-bootstrap";


const userData = [
    {firstName: "Azhar", lastName: "Choudhury", age: 25, employee_ID: 13406531, email_ID: "azhar.m.choudhury@accenture.com" },
    {firstName: "Rajeev", lastName: "Ranjan", age: 26, employee_ID: 13406550, email_ID: "rajeev.ranjan@accenture.com" },
    {firstName: "Abhirup", lastName: "Roy", age: 25, employee_ID: 13406290, email_ID: "abhirup.roy@accenture.com" },
    {firstName: "Abhishek", lastName: "Paul", age: 25, employee_ID: 13406602, email_ID: "abhishek.paul@accenture.com" },
    {firstName: "Krishanu", lastName: "Dutta", age: 25, employee_ID: 13402783, email_ID: "krishanu.dutta@accenture.com" },
    {firstName: "Bhargav", lastName: "Bhattacharya", age: 25, employee_ID: 13406532, email_ID: "bhargav.bhattacharya@accenture.com" },
    {firstName: "Vivek", lastName: "Singha", age: 25, employee_ID: 13406160, email_ID: "vivek.singha@accenture.com" },
]

function UserTable(props){


    const handleDelete = (employeeid) => {
        const newData = props.data.filter(
          (item) => item.employeeid !== employeeid
        );
        props.setData(newData);};


    // return (
    //     <div className="App">

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
        
    //  </div>
    //     </div>
    // );


    return(
        <div>
            <h1> Employees Detailes</h1>

            <Table  bordered hover size="m" >
            <thead>
                <tr>
                    <th>name</th>
                    <th>Age</th>
                    <th>EmployeeID</th>
                    <th>Eamil-ID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        
   
            {props.data.map((value, key) => {
            return ( 
              <tr key={key}>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.employeeid}</td>
                <td>{value.emaiid}</td>
                <td>
                  <button className="btn btn-danger"onClick={() => handleDelete(value.employeeid)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
            })};
            </tbody>
            </Table>
        </div>
    )
}


export default UserDetails;