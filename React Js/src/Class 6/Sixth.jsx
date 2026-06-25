import { useReducer } from "react"

let initalState={
    count1:0,
    count2:50,
    count3:100
}

function reducer(state,action){
    switch(action.type){
        case "Inc1" :{
            return {
                ...state, // open the state
                [action.payload]:state[action.payload]+1
            }
        }

        case "Inc2" :{
            return{
                ...state,
                [action.payload]:state[action.payload]+50
            }
        }

        case "Inc3" :{
            return{
                ...state,
                [action.payload]:state[action.payload]+100
            }
        }
    }
}

export default function Sixth(){
    // useReducer()
    // --> State : Current Data
    // --> Action : What to do
    // --> Reducer : Function that updates the state.

    // Syntax
    // let [state,dispatch] = useReducer(reducer,initalState)

    const[state,dispatch]=useReducer(reducer,initalState)

    // dispatch transfers two attribute :
    // 1. type : What's its type
    // 2. payload : That transfers some data to the reducer

    console.log(initalState)
    return(
        <>
            <div>
                <h1>{state.count1}</h1>
                <button onClick={()=>{
                    dispatch({
                        type:"Inc1",
                        payload:"count1"
                    })
                }}>+1</button>
            </div>
            <div>
                <h1>{state.count2}</h1>
                <button onClick={()=>{
                    dispatch({
                        type:"Inc2",
                        payload:"count2"
                    })
                }}>+50</button>
            </div>
            <div>
                <h1>{state.count3}</h1>
                <button onClick={()=>{
                    dispatch({
                        type:"Inc3",
                        payload:"count3"
                    })
                }}>+100</button>
            </div>
        </>
    )
}