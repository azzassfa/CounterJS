import { useState } from "react";
import { Component } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Counter() {
    const [counter, setCounter] = useState(0);

    function incCounter() {
        const c=1;
        let newCounter = counter+c;
        setCounter(newCounter);
    }

    function decCounter() {
        const c=1;
        let newCounter = counter-c;
        setCounter(newCounter);
    }

    function incCounterRandom() {
        const c=Math.floor(Math.random()*100);
        let newCounter = counter+c;
        setCounter(newCounter);
    }

    function decCounterRandom() {
        const c=Math.floor(Math.random()*100);
        let newCounter = counter-c;
        setCounter(newCounter);
    }

    return (
        <div>
            <h1 style={{marginTop:"0"}}>{counter}</h1>
            <p>
            <Button variant="contained" onClick={incCounter} style={{margin:"10px", backgroundColor:"green"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button variant="contained" onClick={decCounter} style={{margin:"10px", backgroundColor:"red"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            </p>
            <p>
            <Button variant="contained" onClick={incCounterRandom} style={{margin:"10px", backgroundColor:"green"}}>+ Random</Button>
            <Button variant="contained" onClick={decCounterRandom} style={{margin:"10px", backgroundColor:"red"}}>- Random</Button>
            </p>
        </div>
    );
}

export default Counter;