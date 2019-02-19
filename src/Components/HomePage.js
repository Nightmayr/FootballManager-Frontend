import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';
import { CreateAccountPageLink, ManageSessionPageLink } from '../constants.js';

class HomePage extends Component {

  manageSessionPageLoad = () => {
    window.location.href = ManageSessionPageLink;
  }

  createAccountPageLoad = () => {
    window.location.href = CreateAccountPageLink;
  }

  render() {
    return (

      <div id="landing-page">
        <img src="/football.png" id="frontPic" alt="ball" />
        <br /> <br />
        <div id="login-jumbotron">
          {/* <Jumbotron> */}
            <header id="header-1"><h1>Monday Night Football Portal</h1></header>
            <br />
            <h3 id="header-2">Login or signup to join the next session.</h3>
            <br />
            <h4 id="tagline">Can you do it on a cold, rainy night in Stoke?</h4>
            <br />
            <input id='user-email' type='text' placeholder='email' required /><br /><br />
            <input id='password' type='password' placeholder='password' required /><br /><br />
            <Button id='login' bsStyle="primary" onClick={this.manageSessionPageLoad}>Login</Button>
            <br /> <br />
            <Button id='create-account' bsStyle="primary" onClick={this.createAccountPageLoad}>Create Account</Button>
          {/* </Jumbotron> */}
        </div>
      </div>
    );
  }
}

export default HomePage;
