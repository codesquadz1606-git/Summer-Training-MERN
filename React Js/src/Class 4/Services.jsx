import { Outlet, useNavigate } from "react-router-dom";

export default function Services(){
    const navigate=useNavigate()
    return(
        <>
            <h1>Services Page</h1>
            <Outlet/> 
            <div> 
                <button onClick={()=>{navigate("wb")}}>Website Creation</button>
                <button onClick={()=>{navigate("ab")}}>Agents Creation</button>
                <button onClick={()=>{navigate("dm")}}>Digital Creation</button>
            </div>
        </>
    )
}