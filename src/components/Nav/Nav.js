import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import mainbg from "../../media/images/mainbg.jpg"
import bg_about from "../../media/images/bg_about.jpg"
import bg_contact from "../../media/images/bg-contact.jpg"
import bg_team from "../../media/images/bg_team.jpg"
import About from "../About/About"
import Contact from "../Contact/Contact";
import Works from "../Works/Works";
import "./Nav.css"
class Nav extends React.Component {
    state = {
        bg : mainbg
    }
  changeBg=(bg)=>{
     this.setState({bg : bg})
  }
    render() {
        const {bg} = this.state;
        return (
            <div className="Nav" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh',transition:'0.5s' }}>
               <div className="Nav_links">
                <Link to="/home" Component={Home} onClick={()=>this.changeBg(mainbg)}>Home</Link>
                <Link to="/about" Component={About} onClick={()=>this.changeBg(bg_about)}>About Us</Link>
                <Link to="/contact" Component={Contact} onClick={()=>this.changeBg(bg_contact)}>Contact</Link>
                <Link to="/works" Component={Works} onClick={()=>this.changeBg(bg_team)}>Our works</Link>
                </div>
      <div className="Nav_header"><h1>We Provide Really Good tacos</h1>
      <h3>Hola my friend, full satisfaction with just one bite guaranteed</h3>
            </div>
            </div>
        )
    }
}
export default Nav;