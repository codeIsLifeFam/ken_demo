import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends React.Component {
 state={
   name:'Hayden'
 }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return (
      <div className="About">
        <div className="About_el-1">
          <h2>
          We live here, our friends live here. Our reputation lives here. <br/>
          </h2>
          We believe that being the best general contractor enables you to continue to grow your business
          <article>
            As Sak's, we have lived off our reputation for over a decade. We live here, so we want you to have a great experience 
            that you tell your friends and business acquaintances about us. This is our first website - in 2018. 
            We have grown and endured by word-of-mouth since 1998. 
          </article>
          <h2>
            Sak's was created to be your provider of general contracting services: 
          </h2>
          <article>
            We are a certified Duralast roofing business. We take pride in delivering you the best roof possible with the best installation services. 
            As a General Contractor, we offer complete, turn-key systems providing: 
            Roof work <br/>Build-out <br/>  Tile work <br/> and Finishing services 
          </article>
        </div>
        <div className="About_el-2">
          <span data-aos='fade-up' className="About_blue">1K and growing...</span>
          <h1>Over 1,000 satisfied customers</h1>
        </div>
        <hr />
        
        <div className="About_el-4">
          <span data-aos='fade-down'>
            <span className="About_blue"> 20+ years</span>
            <h3>Over 1,000 customers around town ranging from bathroom remodels to finishing out 7-11s</h3>
          </span>
          <span data-aos='fade-up' className="About_el-4_sec">
            <span className="About_blue">45+</span>
            <h3>Employees</h3>
          </span>
        </div>
      </div>
    );
  }
}
export default About;
