import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { ManageSessionPageLink, CreateAccountPageLink } from './constants'
import ManageSession from "./Components/ManageSession";
import CreateAccount from "./Components/CreateAccount";
import HomePage from "./Components/HomePage";


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="bg-image" />
          <center>
            <Link to={ManageSessionPageLink} id='manage-portal' />
            <Link to={CreateAccountPageLink} id='create-portal' />

            <Route exact path="/" component={HomePage} />
            <Route path={ManageSessionPageLink} component={ManageSession} />
            <Route path={CreateAccountPageLink} component={CreateAccount} />

          </center>
        </div>
      </Router>
    );
  }
}

export default App;