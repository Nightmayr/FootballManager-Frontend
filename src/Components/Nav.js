import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import HomePage from "./HomePage.js";
import Table from "./ManageSession.js";
import CreateAccount from './CreateAccount.js';




class Nav extends Component {
    render() {
        return (
            <Router>
            <div >
                <div>
            <ul id = "navigationbarul">
            <li id = "hbut"><Link to="/">Home</Link></li>
            <li id = "tbut"><Link to="/session">Who's Playing</Link></li>
            <li id = "cbut"><Link to="/reg">Register your Account</Link></li>
            </ul>
           

            </div>

            <Route exact path="/" component={HomePage} />
            <Route path ="/session" component={Table} />
            <Route path ="/reg" component={CreateAccount} />
        
            </div>
            </Router>
        );
    }
}

export default Nav;