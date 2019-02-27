import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { CreateAccountPageLink, ManageSessionPageLink, BaseURL, getAccounts , accounts, qaTrainee, qaStaff} from '../constants.js';
import axios from 'axios';
const bcrypt = require('bcryptjs');

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      staff : []
    };
  }

  manageSessionPageLoad = () => {
    window.location.href = ManageSessionPageLink;
  }

  createAccountPageLoad = () => {
    window.location.href = CreateAccountPageLink;
  }

  handleEmailChange = (event) => {
    this.setState({
	 email: event.target.value,
	 message: ""
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
	password: event.target.value,
	message: ""
    });
  }

  handleLogin = (e) => {
    if(!(this.state.email.includes(qaTrainee))&&!(this.state.email.includes(qaStaff))){
      this.setState({ message: "You must use a QA email to login" });
    }
    else if (this.state.email && this.state.password) {
      axios.get(BaseURL +  accounts +getAccounts)
      .then(response => {
        this.setState({
          staff: response.data
        })
	var loggedIn = false;
        for (let member = 0; member < this.state.staff.length; member++) {
          if (((this.state.email === this.state.staff[member].email) || (this.state.email === this.state.staff[member].fullName)) &&
            (bcrypt.compareSync(this.state.password, this.state.staff[member].password))) {
              console.log ( "DATABSE CHEDKED");
            sessionStorage.setItem("user", JSON.stringify(this.state.staff[member]));
            console.log(sessionStorage.getItem("user"));
            loggedIn = true;
          }
        }
        if(loggedIn) {
          this.manageSessionPageLoad();
        } else {
          this.setState({ message: "User not found" });
        }
      });
      console.log(this.state.staff);
    } else {
      this.setState({
        message: "Please fill in all fields"
      });
    }
    e.preventDefault();
    
  }
  
  render() {
    return (

      <div id="landing-page">
        {/* <img src="/football.png" id="frontPic" alt="ball" /> */}
        <br /> <br />
        <div id="login-jumbotron">

          <header id="header-1"><h1>Monday Night Football</h1></header>
          <br />
          <h3 id="header-2">Login or signup to join the next session.</h3>
          <br />
          <h4 id="tagline">Can you do it on a cold, rainy night in Stoke?</h4>
          <br />
          <input id='user-email' type='text' placeholder='Email' onChange={this.handleEmailChange} required /><br /><br />
          <input id='password' type='password' placeholder='Password' onChange={this.handlePasswordChange} required /><br /><br />
          <p id="errorMessageLogin">{this.state.message}</p>
          <br></br>
          <Button id='login' class="button" onClick={this.handleLogin}>Login</Button>
          <br /> <br />
          <Button id='create-account' onClick={this.createAccountPageLoad}>Create Account</Button>

        </div>
      </div>
    );
  }
}

export default HomePage;
