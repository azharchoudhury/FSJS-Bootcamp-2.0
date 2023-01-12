import { useState } from 'react';
import './App.css'
import UserForm from "./UserForm";
import UserTable from "./UserTable";
function UserDetails(){
    const [data, setData] = useState(
   [{name:"Azhar Choudhury", age: 25, employeeid: 1340542, emailid: "azhar@gmail.com"},
    { name: 'Ruchi', age: 22,employeeid:12345,emaiid:"ruchi@gamail.com"},
    { name: 'Srianth Alokam', age: 22,employeeid:12345,emaiid:"alokamsrinath@gamail.com"}
   ]);
    // const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData([...data, newData]);
  };


    return(

        <div>
            <UserForm updateData={updateData} />
            <UserTable data={data}  setData={setData}/>
        </div>
    )
}
export default UserDetails;