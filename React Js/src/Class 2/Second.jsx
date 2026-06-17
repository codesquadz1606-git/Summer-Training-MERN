import "./second.css"
export default function Second(){
    const div_style={
        width:"400px",
        height:"400px",
        backgroundColor:"red"
    }
    // JS
    return(
        <>
            {/* HTML */}
            {/* We will not write css in {} beecause it refers to JS */}
            <h1 style={{color:"green"}}>Hello</h1>

            <div style={div_style}></div>

            <div className="sq"></div>
        </>
    )
}