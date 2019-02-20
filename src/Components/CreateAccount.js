import React, { Component } from 'react';
import HomePage from "./HomePage";
import axios from 'axios';
import { AccCreate , BaseURL  } from '../constants';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const bcrypt = require('bcryptjs');


class CreateAccount extends Component {

  constructor() {

    super();

    this.state = {
      fullname: '',
      email: '',
      password: '',
      confirm: '',
      id: '',
     
     
    }
 
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });

  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });

  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }

  handleChangeFullname = event => {
    this.setState({ fullname: event.target.value });
  }

  handleChangeConfirmPassword = event => {
    this.setState({ confirm: event.target.value });
  }

  handleSubmitAdd = () => {
    if(this.state.fullname && this.state.email && this.state.password){
      if(this.state.password === this.state.confirm){
        var hash = bcrypt.hashSync(this.state.password, 10);
    axios({
      method: "post",
      url: BaseURL + AccCreate,
      data: {
        fullname: this.state.fullname,
        email: this.state.email,
        password: hash, 
        playing : false
    
       }
     });
   
    window.open("/");
      } else {
        alert("Passwords don't match");
      }
    } else {
      alert("Please fill out all fields");
    }
  }
  
  render() {

   
      return(
   
        <div id="accountButtons">
        <ul id="buttonRemoval">
        
        <li> <input id = "fullnameInput" type="text"  onChange={this.handleChangeFullname} placeholder = "fullname"/></li>
        <li> <input id = "emailInput" type="email"  onChange={this.handleChangeEmail} placeholder = "email" /></li>
        <li> <input id = "passInput" type="password"  onChange={this.handleChangePassword} placeholder = "password"/></li>
        <li> <input id = "confirmInput" type="password"  onChange={this.handleChangeConfirmPassword} placeholder = "confirm password"/></li>
        
        <li><Link to="/">Back</Link></li>
        <Route exact path="/" component={HomePage} />

        <button type="button" onClick={this.handleSubmitAdd}>Create</button>
        </ul>
     
      </div>
   
      
      );
    


   
  }
}


export default CreateAccount;
