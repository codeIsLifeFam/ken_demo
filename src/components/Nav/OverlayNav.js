import React from "react";
import {Link} from "react-router-dom"
import "./OverlayNav.css"
const OverlayNav = ()=>{
    return <div className="overNav">
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/works">Our Works</Link>
    <Link to="/team">Our team</Link>
    <Link to="/contact">Contact</Link>
    </div>
}


export default OverlayNav;