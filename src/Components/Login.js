import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import api from "../api"

export default class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      redirect: false,
    }
  }

  connect() {
    api.login(this.state.email, this.state.password).then(() => {
      if(localStorage.getItem("token") != null) {
        this.setState({
        redirect: true
      })
      }
    })
  }

  render() {
    
    if(this.state.redirect === true) {
      return <Redirect to="/" />
    }else {
      return (
        <div className="sign-up">

          <h1>Login</h1>
            <div>
              <label htmlFor="email">Email :</label>
              <input type="text" id="email" placeholder="email" value={this.state.email} onChange={(e) => { this.setState({email: e.target.value}) }}/>
            </div>
            
            <div>
              <label htmlFor="password">Password :</label>
              <input type="password" id="password" placeholder="password" value={this.state.password} onChange={(e) => { this.setState({password: e.target.value}) }}/>
            </div>

            <button id="sign-up" onClick={() => { this.connect() }}>Login</button>
        </div>
        
      );
    }
  }
}