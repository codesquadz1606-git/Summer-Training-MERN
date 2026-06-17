export default function First(){
    // JS
    return(
        // HTML
        <>
            <h1>My First Component</h1>   
        </>
    )
}

function First1(){
    return(
        <>
            <h1>New Component</h1>
        </>
    )
}

function First2(){
    return(
        <>
            <h1>Third Component</h1>
        </>
    )
}

function Detail({name,city}){
    console.log(name,city)
    return(
        <>
            <h1>My name is {name} & I belong to {city}</h1>
        </>
    )
}

function Detail1({info}){
    console.log(info)
    return(
        <>
            <h2>Name:{info.name}</h2>
            <h2>City:{info.city}</h2>
            <h2>Age:{info.age}</h2>
        </>
    )
}

export {First1 , First2 , Detail , Detail1}