import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter} from "react-router"
// import PropTypes from "prop-types"
import "./Landing.css"
class Landing extends Component{
  compClassName = ['example-component'];
 state = {
   show : false,
   change: false
 }

  componentDidMount = () => {
    this.timer = setInterval(this.goHome, 3000)
    this.transitionTimer = setInterval(this.transition ,1000)
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
      <h1 className="Landing_logo">
      Some logos here
      <CircularProgress style={{ color:'white' }} thickness={7} />
      </h1>
        </div>
    )
  }
};

// Landing.propTypes = {
//   show: PropTypes.bool.isRequired
// };

export default withRouter(Landing)