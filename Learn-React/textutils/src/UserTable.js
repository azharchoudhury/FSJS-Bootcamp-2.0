import React from "react";
import './App.css'
import { Table } from "react-bootstrap";

  //const data=[{name:"srinath",age:22,employeeid:"123456"}]
  
function UserTable(props) {

  
  const handleDelete = (employeeid) => {
    const newData = props.data.filter(
      (item) => item.employeeid !== employeeid);
    props.setData(newData);};


    return(
      
        <div>
            <h1> Employees Details</h1>

            <div className="container">
                <Table striped bordered hover className="mx-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Employee ID</th>
                        <th>E-mail ID</th>
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
                })}
                </tbody>
                </Table>
            </div>

        </div>
    )
}
export default UserTable;