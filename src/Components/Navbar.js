import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    
    if(localStorage.getItem("token") == null) {
      return (
        <div className="navbar">
          <NavLink to={`/`}>Go to Home</NavLink> <br />
          <NavLink to={`/sign-up`}>Go to Sign up</NavLink> <br />
          <NavLink to={`/login`}>Go to Login</NavLink>  <br />
        </div>
      )
    }else {
      return(
      <div className="navbar">
        <NavLink to={`/`}>Go to Home</NavLink> <br />
        <NavLink to={`/new-article`}>Go to Post Aritcle</NavLink> <br />
        <NavLink to={`/profile`}>Go to Profile</NavLink> <br />
      </div>
      )
    }
  }
}