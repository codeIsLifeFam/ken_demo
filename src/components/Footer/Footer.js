import React, { Component } from "react";
import {Link} from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Works from "../Works/Works"
import About from "../About/About"
import "./Footer.css"
import logo from "../../media/images/logo.png"
class Footer extends Component{
 render() {
     return(
         <div className="Footer"> 
         <img src={logo} alt="logo"width="100"/>
          <div className="Footer_links">
          <Link to="/home" Component={Home}>Home</Link>
                <Link to="/about" Component={About}>About Us</Link>
                <Link to="/contact" Component={Contact} >Contact</Link>
                <Link to="/works" Component={Works}>Our works</Link>
          </div>

        </div>
     )
 }  
}

export default Footer