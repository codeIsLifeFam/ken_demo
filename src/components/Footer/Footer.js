import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../media/images/logo.png";
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <img src={logo} alt="logo" width="100" />
        <div className="Footer_links">
          <Link to="/home" >
            Home
          </Link>
          <Link to="/about">
            About Us
          </Link>
          <Link to="/contact">
            Contact
          </Link>
          <Link to="/works">
            Our works
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
