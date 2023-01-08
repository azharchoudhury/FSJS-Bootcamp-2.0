import { useState } from "react";
import './App.css'
import UserForm from "./UserForm";
import UserTable from "./UserTable";

function UerDetails(){
    const [data, setData] = useState([]);


    const updateData = (newData) => {
        setData([...data, newData]);
    };



    return(

        <div>
            <UserForm updateData = {updateData}/>
            <UserTable data = {data} setData={setData}/>
        </div>
    )
}

export default UserDetails;