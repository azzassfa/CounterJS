import { useState } from "react";
import { Component } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Counter() {
    const [counter, setCounter] = useState(0);

    function updateCounter(e) {
        let c=5;

        if (e.target.name==="incCounter") c=1; 
        else if (e.target.name==="decCounter") c=-1;
        else if (e.target.name==="incCounterRandom") c=Math.floor(Math.random()*100);
        else if (e.target.name==="decCounterRandom") c=-1*Math.floor(Math.random()*100);
        
        let newCounter = counter+c;
        setCounter(newCounter);
        return(
            <div>test</div>
        );
    }

    return (
        <div>
            <h1 style={{marginTop:"0"}}>{counter}</h1>
            <p>
            <Button variant="contained" name="incCounter" onClick={updateCounter} style={{margin:"10px", backgroundColor:"green"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button variant="contained" name="decCounter" onClick={updateCounter} style={{margin:"10px", backgroundColor:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            </p>
            <p>
            <Button variant="contained" name="incCounterRandom" onClick={updateCounter} style={{margin:"10px", backgroundColor:"green"}}>+ Random</Button>
            <Button variant="contained" name="decCounterRandom" onClick={updateCounter} style={{margin:"10px", backgroundColor:"red"}}>- Random</Button>
            </p>
        </div>
    );
}

export default Counter;