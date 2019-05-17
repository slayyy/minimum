import React, { Component } from 'react';
import api from "../api"

export default class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_verif: "",
    }
  }

  // handleEmailChange: (e) => {
  //   this.setState({ e.target.id: e.target.value });
  // }

  register() {
    api.newUser(this.state.firstname, this.state.lastname, this.state.email, this.state.password, this.state.password_verif)
  }
  render() {

    return (
      <div className="sign-up">

        <h1>Sign Up</h1>
        {/* <form> */}
          <div>
            <label htmlFor="firstname" >Firstname :</label>
            <input type="text" id="firstname" placeholder="firstname" value={this.state.firstname} onChange={(e) => { this.setState({firstname: e.target.value}) }}/>
          </div>

          <div>
            <label htmlFor="lastname">Lastname :</label>
            <input type="text" id="lastname" placeholder="lastname" value={this.state.lastname} onChange={(e) => { this.setState({lastname: e.target.value}) }}/>
          </div>

          <div>
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" placeholder="email" value={this.state.email} onChange={(e) => { this.setState({email: e.target.value}) }}/>
          </div>
          
          <div>
            <label htmlFor="password">Password :</label>
            <input type="password" id="password" placeholder="password" value={this.state.password} onChange={(e) => { this.setState({password: e.target.value}) }}/>
          </div>

          <div>
            <label htmlFor="password_verif">Password Verif :</label>
            <input type="password" id="password_verif" placeholder="password verif" value={this.state.password_verif} onChange={(e) => { this.setState({password_verif: e.target.value}) }}/>
          </div>

          <button id="sign-up" onClick={() => { this.register() }}>Sign Up</button>
        {/* </form> */}
      </div>
      
    );
  }
}