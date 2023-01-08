import React from "react";
import './App.css'
import { Table } from "react-bootstrap";

function Users(){
    return (
        <div>
            <h1>Employee Details</h1>

            <div>
                <caption className="caption-top"> Employees </caption>

                <Table bordered hover size="m" className="table-mx-auto">
                    <thead>
                        <tr className="bg-default">
                            <th>Sl No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Employee ID</th>
                            <th>E-Mail ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-primary">
                            <td>1</td>
                            <td>Azhar</td>
                            <td>Choudhury</td>
                            <td>25</td>
                            <td>13406531</td>
                            <td>azhar.m.choudhury@accenture.com</td>
                        </tr>

                        <tr className="bg-secondary">
                            <td>2</td>
                            <td>Rajeev</td>
                            <td>Ranjan</td>
                            <td>26</td>
                            <td>13406550</td>
                            <td>rajeev.ranjan@accenture.com</td>
                        </tr>

                        <tr className="bg-info">
                            <td>3</td>
                            <td>Abhirup</td>
                            <td>Roy</td>
                            <td>25</td>
                            <td>13406290</td>
                            <td>abhirup.roy@accenture.com</td>
                        </tr>

                        <tr className="bg-success">
                            <td>4</td>
                            <td>Krishanu</td>
                            <td>Dutta</td>
                            <td>25</td>
                            <td>13402783</td>
                            <td>krishanu.dutta@accenture.com</td>
                        </tr>

                        <tr className="bg-info">
                            <td>5</td>
                            <td>Bhargav</td>
                            <td>Bhattacharya</td>
                            <td>25</td>
                            <td>13406532</td>
                            <td>bhargav.bhattacharya@accenture.com</td>
                        </tr>

                        <tr className="bg-info">
                            <td>1</td>
                            <td>Vivek</td>
                            <td>Singha</td>
                            <td>25</td>
                            <td>13406160</td>
                            <td>vivek.singha@accenture.com</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}


export default Users;
