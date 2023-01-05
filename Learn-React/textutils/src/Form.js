import { useState } from "react";


export default function Form(){


// States for registration
const [firstName, setFirstName] = useState(' ');
const [lastName, setLastName] = useState(' ');
const [age, setAge] = useState(0);
const [employeeID, setEmployeeID] = useState(0);
const [emailID, setEmailID] = useState(' ');


// States for checking the errors
 const [submitted, setSubmitted] = useState(false);
 const [error, setError] = useState(false);


// Handling the user details change

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
        setSubmitted('false');
    }


    const lastNameHandler = (event) => {
        setLastName(event.target.value);
        setSubmitted(false);
    }


    const ageHandler = (event) => {
        setAge(event.target.value);
        setSubmitted(false);
    }


    const employeeIdHandler(event) => {
        setEmployeeID(event.target.value);
        setSubmitted(false);
    }


    const emailIDHandler(event) => {
        setEmailID(event.target.value);
        setSubmitted(false);
    }


    // Handling the form submission
    const submitButtonHandler(event) => {
        event.preventDefault();
        if(firstName == '' || lastName == '' || age == '' || employeeID== '' || emailID == ''){
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };



}