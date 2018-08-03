import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import "./Drawer.css";
import logo from "../../media/images/logo.png";
const styles = {
  Drawer: {
    width: "250px",
    backgroundColor: "#1b1f25",
    height: "100%"
  }
};
class Drawer extends React.Component {
  state = {
    open: false
  };
  toggleDrawer = () => () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { open } = this.state;
    return (
      <div>
          <Button onClick={this.toggleDrawer()} className="burger_container">
            <i className="fas fa-bars burger" />
          </Button>
        <SwipeableDrawer
          open={open}
          onClose={this.toggleDrawer()}
          onOpen={this.toggleDrawer()}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
            style={styles.Drawer}
          >
            <nav className="Drawer_links">
              <List>
                <div className="Drawer_logo">
                  <img width="80" src={logo} alt="logo" />
                </div>
                <Link to="/home">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/works">Our works</Link>
                <Link to="/team">Our Team</Link>
                <Link to="/contact">Contact</Link>
              </List>
            </nav>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(Drawer);
