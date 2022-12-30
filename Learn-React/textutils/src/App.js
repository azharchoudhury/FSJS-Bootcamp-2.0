import logo from './logo.svg';
import './App.css';

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


  const age = 22;
  const isGreen = true;
  const userName = "David";
  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];



  // if(age >= 18){
  //   return <h1>Over Age</h1>
  // }
  // else{
  //   return <h2>Under Age</h2>
  // }


  return (
   <div className="App">

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

    

   </div>
  );
}

// Props
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
