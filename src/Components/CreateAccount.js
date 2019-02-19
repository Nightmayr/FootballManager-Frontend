import React, { Component } from 'react';
import ManageSession from "./ManageSession";
import axios from 'axios';
import { AccCreate , BaseURL  } from '../constants';


class CreateAccount extends Component {

  constructor() {

    super();

    this.state = {
      name: '',
      password: '',
      id: '',
     
    }
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });

  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });

  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmitAdd = () => {
    axios({
      method: "post",
      url: BaseURL + AccCreate,
      data: {
        name: this.state.name,
        password: this.state.password
        
       }
     });
  }
  
  render() {

   
      return(
        <div id="accountButtons">
<ul>
     
        <li> <input id = "nameInput" type="text"  onChange={this.handleChangeName} placeholder = "name" /></li>
        <li> <input id = "passInput" type="text"  onChange={this.handleChangePassword} placeholder = "password"/></li>


        <button type="button" onClick={this.handleSubmitAdd}>Create</button>
        </ul>

      </div>
      );
    


   
  }
}


export default CreateAccount;
