import { useState } from "react"
import './App.css'
import swal from 'sweetalert';

function  UserForm( props) {
// const[formData, setFormData] = useState(name:"")
const [name, setName] =useState('');
const[age,setAge]=useState('');
const[employeeid,setEmployeeid]=useState('');
const[emaiid,setEmailid]=useState('');
const [data, setData] = useState([]);

//Error handling states
const[submitted ,setSubmitted]=useState(false);
const[error,SetError]=useState(false);


// const [entry, setEntry] = useState('');


const handleName=(e)=>{
setName(e.target.value);
// setEntry(e.target.value);
setSubmitted(false);
};
const handleAge=(e)=>{
    setAge(e.target.value);
    // setEntry(e.target.value);
    setSubmitted(false);
};
const handleEmployeeid=(e)=>{
setEmployeeid(e.target.value);
// setEntry(e.target.value);
setSubmitted(false);
};
const handleEmailid=(e)=>{
    setEmailid(e.target.value);
    // setEntry(e.target.value);
    setSubmitted(false);
};


// const changeHandler= (event) => {

// }



const handleSubmit = (e) => {
  e.preventDefault();
  if (name === '' || age === '' || employeeid === '' || emaiid === '') {
    SetError(true);
    swal({  
      title: " Oops!",  
      text: " Something went wrong, Please enter all fileds",  
      icon: "error",  
      button: "OK!",  
    })


  } else {
    // Add form data to the data array
    props.updateData({ name, age, employeeid, emaiid });
    // Clear the form fields
    
    setName('');
    setAge('');
    setEmployeeid('');
    setEmailid('');
    setSubmitted(true);
    swal({  
      title: "You have successfully registered",
      text: "",  
      icon: "success",  
      button: "Done!",  
    });  
    SetError(false)
    
  };
  
  
};

const successMessage = () => {
  return (
    <div
      style={{
        display: submitted ? '' : 'none',
      }}>
    </div>
  );
};
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        style={{
          display: error ? '':'none'
          
        }}>
          
      </div>
    );
  };
return(
        <div>
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
        <div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                      <label>Name:</label>
                      <input onChange= {handleName} value={name} className="form-control" placeholder="Please enter name" aria-label="Name" type="text"/>
                    </div>
                    <br></br>

                    <div className="col">
                      <label>Age:</label>
                      <input onChange={handleAge} value={age} className="form-control" placeholder="Please enter age" aria-label="Age"type="number"/>
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col">
                      <label> EmployeeId:</label>
                      <input onChange={handleEmployeeid} value={employeeid} className="form-control" placeholder="Please enter employeed id" aria-label="employeeid" type="number"/>
                    </div>
                  <br/>
                  <div className="col">
                    <label>EmailId:</label>
                    <input onChange={handleEmailid} value={emaiid} className="form-control" placeholder="Please enter e-mail id" aria-label="Emailid" type="email" />
                  </div>
                </div>

                <br></br>

                <div className="col-md-12 text-center">
                  <button className="btn btn-primary" onClick={handleSubmit} type="submit">Submit</button>
                </div>

              <div className="messages">
                {errorMessage(   )}
                {successMessage()  }
              </div>
        
            </form>
          
        </div>
        </div>
    )
}

export default UserForm;
