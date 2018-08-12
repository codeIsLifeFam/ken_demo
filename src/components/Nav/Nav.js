import React from "react";
import { Link, withRouter } from "react-router-dom";
import mainbg from "../../media/images/general-contracting.jpg";
import bg_about from "../../media/images/roofer1.jpg";
import bg_contact from "../../media/images/bg_contact.jpg";
import bg_team from "../../media/images/bg_team2.jpg";
import logo from "../../media/images/logo.png";
import bg_work from "../../media/images/duralast2.jpg";
import "./Nav.css";
import  Drawer from './Drawer'
class Nav extends React.Component {
  state = {
    "/home": mainbg,
    "/about": bg_about,
    "/contact": bg_contact,
    "/team": bg_team,
    "/works": bg_work,
  };
  burgerSwitch(){
     this.setState({burgerSwitch:!this.state.burgerSwitch})
  }
  render() {
    const url = this.props.location.pathname;
    console.log(url);
    const styles = {
      link: {
        color: "white"
      }
    };
    return (
      <article
        className="Nav_overlay"
        style={{
          backgroundImage: `url(${this.state[url]})`,
          backgroundSize: "cover",
          height: "100vh",
          transition: "0.5s"
        }}
      >
        <div className="Nav">
          <div className="Nav_top">
            <span className="Nav_logo">
              <img src={logo} alt="logo" width="170" />
            </span>
            <div className="Nav_links">
              <Link to="/home" style={url === "/home" ? styles.link : null}>
                Home
              </Link>
              <Link to="/about" style={url === "/about" ? styles.link : null}>
                About Us
              </Link>

              <Link to="/works" style={url === "/works" ? styles.link : null}>
                Our works
              </Link>
              <Link to="/team" style={url === "/team" ? styles.link : null}>
                Our Team
              </Link>
              <Link
                to="/contact"
                style={url === "/contact" ? styles.link : null}
              >
                Contact
              </Link>
            </div>
         <Drawer />
          </div>

          <div className="Nav_header">
            {url === "/about" ? (
              <div className="Nav_header2">
                <h3>About Sak's</h3>
                <h1>
                  Sak's general contracting has been serving the DFW area for over 20 years
                </h1>
              </div>
            ) : url === "/contact" ? (
              <div className="Nav_header3">
                <h3>Contact Us</h3>
                <h1>Contact us to learn more about how Sak's can help you</h1>
              </div>
            ) : url === "/works" ? (
              <div className="Nav_header4">
                <h1>We are DuraLast certified</h1>
                <h3>
                  As Sak's we believe DuraLast to be the best rook out there. Guaranteed
                </h3>
              </div>
            ) : url === "/team" ? (
              <div className="Nav_header5">
                <h3>Team</h3>{" "}
                <h1>
                  A team of dedicated professionals committed to exceeding your
                  expectations
                </h1>
              </div>
            ) : (
              <div style={{ marginLeft: "10%" }}>
                <h1>Commercial Roofing Services</h1>
                <h3>
                 over 20 years in providing services
                </h3>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }
}
export default withRouter(Nav);
