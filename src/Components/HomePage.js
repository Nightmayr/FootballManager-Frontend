import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ManageSessionPageLink } from '../constants.js';

class HomePage extends Component {

  manageSessionPageLoad = () => {
    window.location.href = ManageSessionPageLink;
  }

  render() {
    return (

      <div id="landing-page">
        <br /> <br />
        <header id="header-1"><h2>Monday Night Football Portal</h2></header>
        <br /> <br />
        <h4 id="header-2">Login or signup to join the next session.</h4>
        <br /> <br />
        <p id="tagline">Can you do it on a cold, rainy night in Stoke?</p>
        <br /> <br />
        Email: <input id='user-email' type='text' placeholder='j.s@academytrainee.com' required /><br /><br />
        Password: <input id='password' type='text' placeholder='qwerty' required /><br /><br />
        <Button id='login' bsStyle="primary" onClick={this.manageSessionPageLoad}>Login</Button>
        <br /><br />
        <Button id='create-account' bsStyle="primary" onClick={this.props.genRoomNumClick}>Create Account</Button>
      </div>
    );
  }
}

export default HomePage;
