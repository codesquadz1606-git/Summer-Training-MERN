import { useLocation } from "react-router-dom"

export default function Error(){
    const {pathname}=useLocation()
    
    return(
        <>
            <h1>No page found at {pathname}</h1>
        </>
    )
}