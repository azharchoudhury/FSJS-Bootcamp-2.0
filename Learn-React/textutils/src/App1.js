import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  // const  name = "Azhar";
  // const friend = <h3>Abhirup</h3>
  // const age = <h3>25</h3>;
  // const email = <h3>azhar@webdev.com</h3>;
  // const user = (
    // <div>
      {/* {name}
      {age}
      {email} */}
    // </div>
  // )


  // const age = 22;
  const isGreen = true;
  const userName = "David";
  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lucas"];

  const users = [
    {name: "Pedro", age: 21},
    {name: "Jake", age: 25},
    {name: "Jessica", age: 21},
  ]


  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ]

  const age = 0;


  // if(age >= 18){
  //   return <h1>Over Age</h1>
  // }
  // else{
  //   return <h2>Under Age</h2>
  // }

  let [counter, setCounter] = useState(0);

  let [inputValue, setInputValue] = useState(" ");

  let [showText, setShowText] = useState(false);
  
  let [textColor, setTextColor] = useState(" ");

  function increaseAge(){
    counter++;
    setCounter(counter);
  }

  function printInput(event){
    // let words = event.target.value;
    setInputValue(event.target.value);
  }


  let [numCount, setNumCount] = useState(0);

  return (
   <div className="App">

    <br/>

    <button onClick={() => {
      setNumCount(++numCount)
    }}>Increase</button>

    <button onClick={() => {
      setNumCount(--numCount);
    }}>Decrease</button>

    <button onClick={() => {
      setNumCount(numCount = 0);
    }}>Set to Zero</button>

    <h2>{numCount}</h2>

    <h1>{counter}<button onClick={increaseAge}>Increase Age</button></h1>

    <input onChange={printInput}></input>

    <h3 style={{color: "blue"}}>{inputValue}</h3>

    <button onClick={() => {
      setShowText(!showText);
    }}>Show/Hide</button>

    <button onClick={() => {
      setTextColor(textColor === "black" ? "purple" : "black");
    }}>Change color</button>

    {/* {showText && <h2 style={{color: "red"}}>My name is Azhar</h2>} */}
    {showText && <h2 style={{color: "red"}}>My name is Azhar</h2>}

    <h3>Hello everyone at <span style={{color: textColor}}><h1>Accenture</h1></span></h3>



    {/* <User/>
    <User/>
    <User/> */}

    {/* Proops */}
    {/* <User name="Azhar" age={25} email="azhar@life.com" />
    <User name="Abhirup" age={25} email="abhirup@life.com" />
    <User name="Bhargav" age={25} email="bhargav@life.com" /> */}


    {/* <Job salary = {1400000} position = "Senior SDE" company="Amazon"/>
    <Job salary = {2400000} position = "Project Manager" company="Google"/>
    <Job salary = {1200000} position = "Junior SDE" company="Razorpay"/> */}


    {/* Ternary operator */}
    {age >= 18 ? <h1>Over Age</h1> : <h2>Under Age</h2>} 
    <h1 style={{color: isGreen ? "green" : "red"}}>This has color.</h1>

    {isGreen && <button>Login</button>}


    <br/>
    <br/>
    <br/>

    {/* Map */}

    {names.map((name, index) => {
       return <h4 key={index}>{name}</h4>
    })}

    <br/>
    <br/>
    <br/>

    {users.map((user, index) => {
      // return <div>{user.name}{user.age}</div>
      {/* We can do this using props.. Let us see below */}
      return <User name={user.name}  age={user.age}/>
    })}

    {/* {planets.map((planetNames, index) =>{
      return <Planet key="index" name={planetNames.name} isGasPlanet={planets.isGasPlanet}/>
    })} */}

    {/* {planets.map((planet, key)=> planet.isGasPlanet && <h1>{planet.name}</h1>)} */}

    <br/>
    <br/>
    <br/>

    {planets.map((planet, key) => {
      return <h1><Planet name={planet.isGasPlanet && planet.name}/></h1>
    })}

   </div>
  );
}

// Props

// const User = (props) => {
//   return (<div>{props.name}{props.age}</div>)
// }

// const Planet = (props) =>{
//   return (
//     <div>{props.name} {props.isGasPlanet}</div>
//   )
// }


// const Job = (props) =>{
//   return(
//     <div>
//       <h1>{props.salary}</h1>
//       <h2>{props.position}</h2>
//       <h3>{props.company}</h3>
//     </div>
//   )
// }



// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h3>{props.email}</h3>
//     </div>
//   )
// }

export default App;
