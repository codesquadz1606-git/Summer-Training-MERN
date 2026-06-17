import { useState } from "react"

export default function Second1(){
    // let data=useState(100); [100, function()] --> destructure
    const [current,setCurrent]=useState(100)
    console.log(current)

    function updateCurrent(){
        setCurrent(current+100); // current = 100 usma update kardo +100 on everyclick
    }

    function updateCurrent1(){
        setCurrent(current-100)
    }
    function resetToZero(){
        setCurrent(0)
    }
    return(
        <>
            {/* useState  */}
            <h1>Count : {current}</h1>
            <button onClick={updateCurrent}>+100</button>
            <button onClick={updateCurrent1}>-100</button>
            <button onClick={resetToZero}>0</button>
        </>
    )
}