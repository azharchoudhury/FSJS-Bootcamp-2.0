import { useState } from "react";


function PlayWithButton(){


    const [counter, setCounter] = useState(0);

    return(
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>

            <button onClick={() => {
                setCounter(counter + 1);
            }}>Increase</button>


            <button onClick={() => {
                setCounter(counter - 1);
            }}>Decrease</button>


            <button onClick = {() => {
                setCounter(0);
            }}>Set to Zero</button>

            <h2>{counter}</h2>
        </div>
    );
}


export default PlayWithButton;