import React, { Component } from 'react';
import HomePage from "./HomePage";
import axios from 'axios';
import { Button } from 'reactstrap';
import { AccCreate, BaseURL, ManageSessionPageLink, qaStaff, qaTrainee, accounts, getAccounts } from '../constants';
import { BrowserRouter as Route, Link } from "react-router-dom";
const bcrypt = require('bcryptjs');

class CreateAccount extends Component {

  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirm: '',
      message: '',
      staff: []
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

  manageSessionPageLoad = () => {
    window.location.href = ManageSessionPageLink;
  }

  manageLogin = () => {
    axios.get(BaseURL +  accounts + getAccounts)
      .then(response => {
        this.setState({
          staff: response.data
        })
        for (let member = 0; member < this.state.staff.length; member++) {
          if (this.state.email === this.state.staff[member].email) {
            sessionStorage.setItem("user", JSON.stringify(this.state.staff[member]));
            this.manageSessionPageLoad();
          }
        }
      });
  }

  handleSubmitCreate = () => {
    
    if (this.state.fullName && this.state.email && this.state.password) {
      if(!(this.state.email.includes(qaTrainee))&&!(this.state.email.includes(qaStaff))){
        this.setState({ message: "You must use a QA email to create an account" });
      }
      else if (this.state.password === this.state.confirm) {
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
        }).then( () => {
          this.manageLogin();
        });
      } else {
        this.setState({
          message: "Passwords don't match"
        });
      }
    } else {
      if(!(this.state.email) || !(this.state.fullName) || !(this.state.password)){
        this.setState({
          message: "Please fill in all fields"
        });
      }

      else{
      this.setState({
        message: "Please fill in all fields"
      });
    }
    }
  }

  render() {
    return (

      <div id="accountCreate">
      <div id="login-jumbotron">
        <ul id="accountCreateForm">
        
          <br></br>
          <h2 id="header-2">Fill out the fields below to create an account.</h2>
          <br></br>
          <li> <input id="fullNameInput" type="text" onChange={this.handleChangeFullname} placeholder="full name" /></li>
          <br></br>
          <li> <input id="emailInput" type="email" onChange={this.handleChangeEmail} placeholder="email" /></li>
          <br></br>
          <li> <input id="passwordInput" type="password" onChange={this.handleChangePassword} placeholder="password" /></li>
          <br></br>
          <li> <input id="confirmInput" type="password" onChange={this.handleChangeConfirmPassword} placeholder="confirm password" /></li>
          <br></br>
          <li id="errorMessageCreate"> {this.state.message} </li>

          <br></br>
          <Button id="createButton" type="button" onClick={this.handleSubmitCreate}>Create</Button>
          
        </ul>
        </div>
      </div>
    );
  }
}

export default CreateAccount;