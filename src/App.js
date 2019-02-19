import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import axios from "axios";
import { BaseURL, PathToCreateAccount, ManageSessionPageLink, CreateAccountPageLink } from './constants'
import ManageSession from "./Components/ManageSession";
import CreateAccount from "./Components/CreateAccount";
import HomePage from "./Components/HomePage";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomNum: '',
    }
  }

  handleClick = () => {
    let className = document.getElementById("className").value;

    if (className.trim() === "") {
      alert("invalid input");
    } else {
      axios.post(BaseURL + PathToCreateAccount,
        {
          className: className,
        }).then((response) => {
          this.setState({
            roomNum: response.data.roomNumber,
          });

          document.getElementById("generateNum").click();

        })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div className="bg-image" />
          <center>
            <Link to={ManageSessionPageLink} id='manage-portal' />
            <Link to={CreateAccountPageLink} id='create-portal' />

            <Route exact path="/" component={HomePage} />
            <Route path={ManageSessionPageLink} render={(...props) => <ManageSession genRoomNumClick={this.handleClick} />} />
            <Route path={CreateAccountPageLink} render={(...props) => <CreateAccount genRoomNumClick={this.handleClick} />} />
          </center>
        </div>
      </Router>
    );
  }
}

export default App;
