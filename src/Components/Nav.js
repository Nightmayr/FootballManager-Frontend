import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { CreateAccountPageLink, ManageSessionPageLink, BaseURL, getAccounts , accounts} from '../constants.js';
import HomePage from "./HomePage.js";
import Table from "./ManageSession.js";
import CreateAccount from './CreateAccount.js';


class Nav extends Component {
    signOut = () => {
        sessionStorage.clear();
        window.location.href = "/";
    }
    render() {
        return (


            <Router>

                <div >
                    <div>
                        <ul id="navigationbarul">
                            <li id = "navImg"><img src="../QAfootball.png"  alt="ball" width="40" height="25"/></li>
                            {sessionStorage.getItem("user") === null ? (
                                [
                                    <li id="hbut"><Link to="/">Login</Link></li>,
                                    <li id="cbut"><Link to="/register">Register</Link></li>,
                                    <li id="tbut"><Link to="/session">Who's Playing</Link></li>
                                ]
                            ) : (
                                [
                                    <li id="tbut"><Link to="/session">Who's Playing</Link></li>,
                                    <li id="tbut"><a onClick={this.signOut} style={{cursor: 'pointer'}}>Sign Out</a></li>
                                ]
                            )}
                        </ul>


                    </div>

                    <Route exact path="/" component={HomePage} />
                    <Route path="/session" component={Table} />
                    <Route path="/register" component={CreateAccount} />

                </div>
            </Router>
        );
    }
}

export default Nav;