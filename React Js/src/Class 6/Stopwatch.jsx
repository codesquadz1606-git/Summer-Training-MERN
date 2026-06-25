import { useRef, useState } from "react"

export default function Stopwatch(){
    const [time,setTime]=useState(0);
    const intervalRef=useRef(null);


    function start(){
        if(intervalRef.current) return;

        intervalRef.current=setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000);
    }

    function stop(){
        clearInterval(intervalRef.current);
        intervalRef.current=null
    }

    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current=null
        setTime(0);
    }
    return(
        <>
            <h1>
                {time} sec
            </h1>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}