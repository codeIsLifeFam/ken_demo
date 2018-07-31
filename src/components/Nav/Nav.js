import React from "react";
import { Link } from "react-router-dom";
import mainbg from "../../media/images/mainbg.jpg";
import bg_about from "../../media/images/bg_about.jpg";
import bg_contact from "../../media/images/bg_contact.jpg";
import bg_team from "../../media/images/bg_team.jpg";
import logo from "../../media/images/logo.png";
import bg_work from "../../media/images/bg_work.jpg"
import "./Nav.css";

class Nav extends React.Component {
  state = {
    bg: mainbg,
    contentPage: 1
  };
  changeBg = (bg, page) => {
    this.setState({ bg: bg, contentPage: page });
  };
  render() {
    const { bg, contentPage } = this.state;
    const styles = {
      link: {
        color: "white"
      }
    };
    return (
      <article
        className="Nav_overlay"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          height: "100vh",
          transition:"0.5s"
        }}
      >
        <div className="Nav">
          <div className="Nav_links">
            <span className="Nav_logo">
              <img src={logo} alt="logo" width="170" />
            </span>
            <Link
              to="/home"
              onClick={() => this.changeBg(mainbg, 1)}
              style={contentPage === 1 ? styles.link : null}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => this.changeBg(bg_about, 2)}
              style={contentPage === 2 ? styles.link : null}
            >
              About Us
            </Link>

            <Link
              to="/works"
              onClick={() => this.changeBg(bg_work, 4)}
              style={contentPage === 4 ? styles.link : null}
            >
              Our works
            </Link>
            <Link
              to="/team"
              onClick={() => this.changeBg(bg_team, 5)}
              style={contentPage === 5 ? styles.link : null}
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              onClick={() => this.changeBg(bg_contact, 3)}
              style={contentPage === 3 ? styles.link : null}
            >
              Contact
            </Link>
          </div>
          <div className="Nav_header">
            {contentPage === 2 ? (
              <div className="Nav_header2">
                <h3>About Sack's</h3>
                <h1>
                  Sack's commercial roofing is an asset manager that lends
                  directly to tacos
                </h1>
              </div>
            ) : contentPage === 3 ? (
              <div className="Nav_header3">
                <h3>Contact Us</h3>
                <h1>Contact us to learn more about Sack's</h1>
              </div>
            ) : contentPage === 4 ? (
              <div className="Nav_header4">
                <h1>We Provide Really Good tacos</h1>
                <h3>
                  Hola my friend, full satisfaction with just one bite
                  guaranteed
                </h3>
              </div>
            ) : contentPage === 5 ? (
              <div className="Nav_header5">
                <h3>Team</h3>{" "}
                <h1>
                  A team of dedicated professionals committed to exceeding your
                  expectations
                </h1>
              </div>
            ) : (
              <div style={{ marginLeft: "10%" }}>
                <h1>We Provide Really Good tacos</h1>
                <h3>
                  Hola my friend, full satisfaction with just one bite
                  guaranteed
                </h3>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }
}
export default Nav;
