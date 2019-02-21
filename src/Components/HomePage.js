import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { CreateAccountPageLink, ManageSessionPageLink, BaseURL, PathToGetAccount } from '../constants.js';
import axios from 'axios';
const bcrypt = require('bcryptjs');

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  manageSessionPageLoad = () => {
    window.location.href = ManageSessionPageLink;
  }

  createAccountPageLoad = () => {
    window.location.href = CreateAccountPageLink;
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleLogin = (e) => {
    if (this.state.email && this.state.password) {
      axios({
        method: "get",
        url: BaseURL + PathToGetAccount,
        responseType: "json"
      }).then(response => {
        let accounts = response.data;
        for (let account = 0; account < accounts.length; account++) {
          if (((this.state.email === accounts[account].email) || (this.state.email === accounts[account].fullName)) &&
            (bcrypt.compareSync(this.state.password === accounts[account].password))) {
            sessionStorage.setItem("user", JSON.stringify(accounts[account]));
            console.log(sessionStorage.getItem("user"));
          }
        }
      });
      this.manageSessionPageLoad();
    } else {
      alert("Please fill in all fields");
    }
    e.preventDefault();
    
  }
  
  render() {
    return (

      <div id="landing-page">
        <img src="/football.png" id="frontPic" alt="ball" />
        <br /> <br />
        <div id="login-jumbotron">

          <header id="header-1"><h1>Monday Night Football</h1></header>
          <br />
          <h3 id="header-2">Login or signup to join the next session.</h3>
          <br />
          <h4 id="tagline">Can you do it on a cold, rainy night in Stoke?</h4>
          <br />
          <input id='user-email' type='text' placeholder='email' onChange={this.handleEmailChange} required /><br /><br />
          <input id='password' type='password' placeholder='password' onChange={this.handlePasswordChange} required /><br /><br />
          <Button id='login' onClick={this.handleLogin}>Login</Button>
          <br /> <br />
          <Button id='create-account' onClick={this.createAccountPageLoad}>Create Account</Button>

        </div>
      </div>
    );
  }
}

export default HomePage;