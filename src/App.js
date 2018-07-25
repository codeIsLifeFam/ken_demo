import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router";
import route from "./routes/route"
import Landing from "./components/Landing/Landing"
import Nav from "./components/Nav/Nav"
class App extends Component {
  render() {
    return (
      <div className="App">

        {
          this.props.history.location.pathname == "/" ?
            <Landing />
            :
            <div className="main" >
              <Nav />
              {route}
          </div>
        }
      </div>
    );
  }
}

export default withRouter(App);
