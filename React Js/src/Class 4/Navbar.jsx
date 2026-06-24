import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a> */}

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    )
}