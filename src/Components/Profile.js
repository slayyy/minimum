import React, { Component } from 'react';
import api from '../api'

export default class Profile extends Component {

  constructor() {
    super()
    this.state = {
      profile: [],
      firstname: "",
      lastname: "",
      birthdate: "",
      old: "",
      newPass: "",
      newPassVerif: "",
    }
  };

  componentDidMount() {
    api.profile().then((result) => {
      this.setState({
        profile: result,
      })
    })
  }

  updateProfile() {
    api.updateProfile(this.state.firstname, this.state.lastname, this.state.birthdate)
  }

  updatePassword() {
    api.updatePassword(this.state.old, this.state.newPass, this.state.newPassVerif)
  }

  render() {
    return(
        <div className="profile">
          <h1>Profile</h1>
          <div className="profile-infos" key={this.state.profile.id}>
            <div className="profile-picture"><strong>Pictures : </strong>{this.state.profile.picture}</div>

            <div className="profile-firstname"><strong>Firstname : </strong>{this.state.profile.firstname}</div>
            <div><input type="text" placeholder="change firstname" value={this.state.firstname} onChange={(e) => { this.setState({ firstname: e.target.value}) }} /></div>
            
            <div className="profile-lastname"><strong>Lastname : </strong>{this.state.profile.lastname}</div>
            <div><input type="text" placeholder="change lastname" value={this.state.lastname} onChange={(e) => { this.setState({ lastname: e.target.value}) }}/></div>
            
            <div className="profile-birthdate"><strong>Birthdate : </strong>{this.state.profile.bithdate}</div>
            <div><input type="text" placeholder="change birthdate" value={this.state.birthdate} onChange={(e) => { this.setState({ birthdate: e.target.value}) }}/></div>

            <button onClick={() => { this.updateProfile() }}>Update Profile</button>

            <div><input type="text" placeholder="Old password" value={this.state.old} onChange={(e) => { this.setState({ old: e.target.value}) }}/></div>

            <div><input type="text" placeholder="New Password" value={this.state.newPass} onChange={(e) => { this.setState({ newPass: e.target.value}) }}/></div>

            <div><input type="text" placeholder="New Password Verification" value={this.state.newPassVerif} onChange={(e) => { this.setState({ newPassVerif: e.target.value}) }}/></div>
           
            <button onClick={() => { this.updatePassword() }}>Update Password</button>

          </div>

        </div>
    )
  }
}