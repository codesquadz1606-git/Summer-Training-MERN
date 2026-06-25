import { useEffect, useState } from "react";

export default function Fifth() {
    let [count, setCount] = useState(0);
    let [facts, setFacts] = useState([]);
    let url = "https://catfact.ninja/fact";
    function dataFetch() {
        // fetch() : used to fetch the api

        fetch(url) //  promise : fullfill or reject : it is handled by then(success) & catch(failure)
            .then((res) => {
                // console.log(res) // is not readable
                return res.json(); // promise 
            })
            .then((data) => {
                setFacts([...facts,data.fact])
            })
            .catch((err) => {
                console.log(err)
            })
        }
        console.log(facts)
        
    useEffect(()=>{
        dataFetch()
    },[])

    return (
        <>
            {/* API fetch */}

            <div>
                <button onClick={dataFetch}>Get fact</button>
            </div>

            <div>
                {
                    facts.map((el)=>(
                        <h2>{el}</h2>
                    ))
                }
            </div>
        </>
    )
}