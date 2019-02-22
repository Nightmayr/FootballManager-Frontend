import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BaseURL, getAccounts } from '../constants';

class ManageSession extends Component {
	constructor(props) {
		super(props);

		this.state = {
			staff: [],
			players: []
		}
		this.update = (event) => {
		axios.get(BaseURL + getAccounts)
		.then(response => {
			this.setState({
			  staff: response.data
			});
			
		});
		
		for(let i=0; i<this.state.staff.length; i++){
		this.state.players = this.state.players.concat(this.state.staff[i].fullName);
		this.state.players = this.state.players.filter((val, id, array) => {
			return array.indexOf(val) === id;
		});
	}
}
}
	render() {
		
		return (
			<div id="join-leave-session">

				<header id="header-1"><h2>Monday Night Football Squad</h2></header>
				<br /><br />
				<Button id='join-list' bsStyle="primary" onClick={this.update}>Join</Button>
				
				<p id='tagline'>Here is a list of everyone that has been added already</p>
				<ol>
				{this.state.players.map((name) => <li>{name}</li>)}
				</ol>
			</div>
		);
	}
}

export default ManageSession;
