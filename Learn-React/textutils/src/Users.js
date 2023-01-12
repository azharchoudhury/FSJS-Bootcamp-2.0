import React from "react";
import './App.css';
import { Table } from "react-bootstrap";

function User(){
//using Html
    return(
        <div><h1>Employee Details</h1>

        <div>
            
            <caption className="caption-top">Employees </caption>
    
            <Table   bordered hover size="m" className="table-mx-auto">
                <thead>
                    <tr  className="bg-default">
                    <th> S.No</th>
                        <th> FirstName</th>
                        <th> LastName</th>
                        <th> Age</th>
                        <th> EmployeeID</th>
                        <th> EamilId</th>
                    </tr>
                </thead>
                <tbody>

                    <tr  className="bg-primary">
                    <td>1</td>
                        <td>Srinath</td>
                        <td>Alokam</td>
                        <td>23</td>
                        <td>13410142</td>
                        <td>srinath.alokam@aceenture.com</td>
                    </tr>
                    <tr className="bg-secondary">
                  
                    <td>2</td>
                    <td>Surya</td>
                    <td>Sunkari</td>
                    <td>23</td>
                    <td>13410143</td>
                    <td>surya.v.sunkari@accenture.com</td>
                    </tr>
                    <tr className="bg-info">
                   
                    <td >3</td>
                    <td>Azhar</td>
                    <td className="bg-warning">Chowdary</td>
                    <td>23</td>
                    <td>13410144</td>
                    <td>azhar.m.choudhury@accenture.com</td>
                    </tr>
                    <tr className="bg-success">
                   
                   <td >4</td>
                   <td>Ruchi</td>
                   <td>Sharma</td>
                   <td>22</td>
                   <td>13410145</td>
                   <td>ruchi.q.sharma@accenture.com</td>
                   </tr>
                   <tr className="bg-info">
                   
                   <td >5</td>
                   <td>Bala</td>
                   <td> E</td>
                   <td>23</td>
                   <td>13410146</td>
                   <td>b.esakki@accenture.com</td>
                   </tr>
                </tbody>



            </Table>

        </div>
        </div>
    )
}
export default User;