import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../components/Landing/Landing"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Works from "../components/Works/Works"
import Team from "../components/Team/Team"
export default (
  <Switch>
    <Route  exact path="/" component={Landing} />
    <Route path ="/home" component={Home} />
    <Route path ="/about" component={About} />
    <Route path ="/works" component={Works} />
    <Route path ="/contact" component={Contact} />
    <Route path ="/team" component={Team} />
  </Switch>
);