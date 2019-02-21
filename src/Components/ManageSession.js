import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BaseURL, ChangeBool } from '../constants';

class ManageSession extends Component {
	constructor(props) {
		super(props);

		this.state = {
			staff: [],
			players: []
		}
		axios.put(BaseURL + ChangeBool)
		.then(response => {
			this.setState({
			  staff: response.data
			});
			
		});
	}
	render() {
		
		return (
			<div id="join-leave-session">

				<header id="header-1"><h2>Monday Night Football Squad</h2></header>
				<br /><br />
				<Button id='join-list' bsStyle="primary" onClick={this.props.genRoomNumClick}>Join</Button>
				
				<p id='tagline'>Here is a list of everyone that has been added already</p>
				{this.state.players.map((name) => <li>{name}</li>)}
			</div>
		);
	}
}

export default ManageSession;
