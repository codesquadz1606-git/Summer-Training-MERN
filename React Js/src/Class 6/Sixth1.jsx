import { useRef, useState } from "react"

export default function Sixth1() {

    const[count,setCount]=useState(0)

    // useRef:
    // i. For Accessing Dom Elements
    // ii. For storing mutable values without re-renders.

    let inputRef = useRef()

    function inputHandle(){
        console.log(inputRef);
        inputRef.current.focus()
        inputRef.current.style.backgroundColor="red"

        inputRef.current.style.height="100px"
    }

    let countRef=useRef(0)
    console.log(countRef.current)
    return (
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={inputHandle}>Focus Input</button>
            </div>

            {/* <div>
                <h2>{count}</h2>
                <button onClick={()=>{setCount(count+1)}}>+1</button>
            </div> */}
            <div>
                <h2>{countRef.current}</h2>
                <button onClick={()=>{
                    countRef.current++;
                    console.log(countRef.current)
                }}>+1</button>
            </div>
        </>
    )
}