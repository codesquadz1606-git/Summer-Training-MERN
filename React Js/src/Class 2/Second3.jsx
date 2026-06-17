import { useEffect, useState } from "react"

export default function Second3(){
    const[value,setValue]=useState(10)

    // use case 1: on every update on page , it is getting re-renders.
    // useEffect(()=>{
    //     console.log("Clicked")
    // })

    // use case 2: It will render only once , then will not re-render on any updates.
    // useEffect(()=>{
    //     console.log("Clicked")
    // },[])

    // use case 3: It will on re-render when their is any update in the dependency.
    useEffect(()=>{
        console.log("Clicked")
    },[value])
    
    return(
        <>
            <h1>Value : {value}</h1>
            <button onClick={()=>{
                setValue(value+10);
            }}>Click Here</button>
        </>
    )
}