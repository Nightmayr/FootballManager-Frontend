import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { ManageSessionPageLink, CreateAccountPageLink } from './constants'
import ManageSession from "./Components/ManageSession";
import CreateAccount from "./Components/CreateAccount";
import HomePage from "./Components/HomePage";
import Nav from "./Components/Nav";


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="bg-image" />
          <center>
          <Nav />
      

          </center>
        </div>
      </Router>
    );
  }
}

export default App;