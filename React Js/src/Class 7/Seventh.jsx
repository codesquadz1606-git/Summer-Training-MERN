import { useContext, useState } from "react"
import { UserContext } from "../App"

export default function Seventh() {
    // Context Api : It is a feature that shares data globally across the components without passing props manually through each level.

    // Props Drilling
    // App
    //  |
    //  --- Dashboard
    //          |
    //          --- Profile
    //                |
    //                --- UserInfo

    // Steps of Context API?
    // Step 1: Create Context
    // Step 2: Create Provider
    // Step 3: Consume the Context

    // Step 3 : Consuming the context
    let { user, setUser } = useContext(UserContext)
    console.log(user)

    return (
        <>
            <h1>{user}</h1>
            <div>
                <input type="text" onChange={(e) => { setUser(e.target.value) }} />
            </div>
        </>
    )
}