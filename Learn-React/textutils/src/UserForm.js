import { useState } from "react";
import './App.css'
import swal from 'sweetalert';



function UserForm(props){
    // States for registration
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[age, setAge] = useState(0);
    const[employeeID, setEmployeeID] = useState(0);
    const[emailID, setEmailID] = useState('');


    // States for error checking
    const[submitted, setSubmitted] = useState(false);
    const[error, setError] = useState(false);


    // Handling the first name change
    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
        setSubmitted(false);
    };

    // Handling the last name change
    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
        setSubmitted(false);
    };

    // Handling the age change
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
        setSubmitted(false);
    }

    // Handling the employee ID change
    const employeeIdChangeHandler = (event) => {
        setEmployeeID(event.target.value);
        setSubmitted(false);
    }

    // Handling the employee email ID change
    const EmailIdChangeHandler = (event) => {
        setEmailID(event.target.value);
        setSubmitted(false);
    }



    const submitButtonHandler = (event) => {
        event.preventDefault();

        // Error check and validation
        if(firstName == '' || lastName == '' || age == '' || employeeID == '' || emailID == ''){
            setError(true);
            swal({
                title: "Oops!!",
                text: "Something just went wrong... Please enter all the fields...",
                icon: "error",
                button: "OK!"
            });
        }
        // else {
        //     //Adding form data to the user data array
            
        //     setSubmitted(true);
        //     swal({
        //         title: `Congrats ${firstName}!!`,
        //         text: "You have successfully registered.",
        //         icon: "success",
        //         button: "Done"
        //     });

        //     setError(false);
        // }

        else{
            // Add form data to the user data array
            props.updateData({firstName, lastName, age, employeeID, emailID});

            // Clear the form fields
            setFirstName('');
            setLastName('');
            setAge('');
            setEmployeeID('');
            setEmailID('');
            setSubmitted(true);
            
            swal({
                title: "Yayy!!",
                text: "You have successfully registered",
                icon: "success",
                button: "Done"
            });
            setError(false);
        }
   };



//    Display success message

const successMessage = () => {
    return(
        <div style={{display: submitted ? '' : 'none'}}> 
            <h1></h1>
        </div>
    )
}



// Display error message
const errorMessage = () => {
    return (
        <div style={{display: error ? '' : 'none'}}> </div>
    )
}



return (
    <div className="main-div">
            <h1 className="pt-5 fw-bold">User Registration</h1>

        <div className="fields">
            <form onSubmit = {submitButtonHandler}>
                <div className="row">
                    <div className="col">
                        <label className="label">First Name</label>
                        <input type="text" onChange={firstNameChangeHandler} className="form-control" value={firstName} placeholder="Please enter your first name" />
                    </div>

                    <div className="col">
                        <label className="label">Last Name</label>
                        <input type="text" onChange={lastNameChangeHandler} className="form-control" value={lastName} placeholder="Please enter your last name" />
                    </div>

                    <div className="col">
                            <label className="label">Age</label>
                            <input type="number" onChange={ageChangeHandler} className="form-control" value={age} placeholder="Please enter your age" />
                    </div>


                    <div className="col">
                        <label className="label">Employee ID</label>
                        <input type="number" onChange={employeeIdChangeHandler} className="form-control" value={employeeID} placeholder="Please enter your employee ID" />
                    </div>

                    <div className="col">
                        <label className="label">E-Mail ID</label>
                        <input onChange={EmailIdChangeHandler} type="email" className="form-control" value={emailID} placeholder="Please enter your e-mail ID" />
                    </div>

                </div>

                <br />

                    <div className="button">
                        <button className="btn btn-primary" onClick={submitButtonHandler} type="submit">Submit</button>
                    </div>

                    <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>
            </form>
        </div>

    </div>
    )
}


export default UserForm;