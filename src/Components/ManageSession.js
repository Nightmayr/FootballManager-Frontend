import React, { Component } from 'react'
import { Button } from 'reactstrap';
import axios from 'axios';
import { BaseURL, getAccounts, accounts, updateAccount, PathToGetAccount, getPlayers } from '../constants';

class ManageSession extends Component {
	constructor(props) {
		super(props);

		this.state = {
			staff: [],
			players: [],
			playersAsObject: [],

		}

	}



	componentDidMount() {

		axios.get(BaseURL + accounts + getPlayers)
			.then(trueplayers => {
				this.setState({
					players: trueplayers.data,
				});
			})
	}

	joinFunction = (event) => {
		axios.put(BaseURL + accounts + "/changeBool/", JSON.parse(sessionStorage.getItem("user")))
			.then(response => {
				console.log("step one");
				// http://localhost:8081/accounts/changeBool/"
				axios.get(BaseURL + PathToGetAccount + JSON.parse(sessionStorage.getItem("user")).accountId)
					.then(response => {
						console.log("step two");
						sessionStorage.setItem("user", JSON.stringify(response.data));
						axios.get(BaseURL + accounts + getPlayers)
							.then(trueplayers => {
								console.log("step three");
								this.setState({
									players: trueplayers.data,
								}
								);
							})
					})
			})
	}

	render() {
		const playerList = this.state.players.map((item) => (
			<li>{item.fullName}</li>
		));
		return (
			<div id="join-leave-session" >
				<div id="login-jumbotron">
					<header id="header-1"><h2>Monday Night Football Squad</h2></header>
					<br /><br />
					<Button id='join-list' bsStyle="primary" onClick={this.joinFunction}>Join</Button>
					<br></br>
					<br></br>
					<p id='tagline'>Here is a list of everyone that has been added already</p>
					<ul id="playerList">
					{playerList}
					</ul>
				</div>
			</div>
		);
	}
}

export default ManageSession;
