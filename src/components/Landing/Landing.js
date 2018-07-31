import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter} from "react-router"
import logo from "../..//media/images/logo.png"
// import PropTypes from "prop-types"
import "./Landing.css"
class Landing extends Component{
  compClassName = ['example-component'];
 state = {
   show : false,
   change: false
 }

  componentDidMount = () => {
    this.timer = setInterval(this.goHome, 1200)
    this.transitionTimer = setInterval(this.transition ,600)
    console.log(this.state.show)
  }
  componentWillUnmount = () => {
    clearInterval(this.timer)
  }
  goHome = () => {
  this.props.history.push('/home')
  }
  transition=()=>{
    this.setState({change : true})
  }
  render() {
    const {change} = this.state;
    change && this.compClassName.push('change')
    return (
      <div className={`Landing ${this.compClassName.join('-')}`}>
      <span>
      <img className="Landing_logo" src={logo} alt="alt" width="150"/>
      <CircularProgress className="Landing_logo-cir" style={{ color:'white',opacity:"0.4" }} size={100}/>
      </span>
        </div>
    )
  }
};

// Landing.propTypes = {
//   show: PropTypes.bool.isRequired
// };

export default withRouter(Landing)