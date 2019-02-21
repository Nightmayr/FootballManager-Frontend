import React, { Component } from 'react';
import HomePage from "./HomePage";
import axios from 'axios';
import { AccCreate, BaseURL } from '../constants';
import { BrowserRouter as Route, Link } from "react-router-dom";
const bcrypt = require('bcryptjs');

class CreateAccount extends Component {

  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirm: ''
    }
  }

  handleChangeFullname = event => {
    this.setState({ fullName: event.target.value });
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });

  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });

  }

  handleChangeConfirmPassword = event => {
    this.setState({ confirm: event.target.value });
  }

  handleSubmitCreate = () => {
    if (this.state.fullName && this.state.email && this.state.password) {
      if (this.state.password === this.state.confirm) {
        let hash = bcrypt.hashSync(this.state.password, 10);
        axios({
          method: "post",
          url: BaseURL + AccCreate,
          data: {
            fullName: this.state.fullName,
            email: this.state.email,
            password: hash,
            playing: false

          }
        });

      } else {
        alert("Passwords don't match");
      }
    } else {
      alert("Please fill out all fields");
    }
  }

  render() {
    return (

      <div id="accountCreate">
        <ul id="accountCreateForm">
          <br></br>
          <h3 id="header-2">Fill out the fields below to create an account.</h3>
          <br></br>
          <li> <input id="fullNameInput" type="text" onChange={this.handleChangeFullname} placeholder="fullname" /></li>
          <li> <input id="emailInput" type="email" onChange={this.handleChangeEmail} placeholder="email" /></li>
          <li> <input id="passwordInput" type="password" onChange={this.handleChangePassword} placeholder="password" /></li>
          <li> <input id="confirmInput" type="password" onChange={this.handleChangeConfirmPassword} placeholder="confirm password" /></li>

          <Route exact path="/" component={HomePage} />
          <button id="createButton" type="button" onClick={this.handleSubmitCreate}>Create</button>
          <br></br><br></br>
          <li><Link id="backButton" to="/">Back</Link></li>
        </ul>
      </div>
    );
  }
}

export default CreateAccount;