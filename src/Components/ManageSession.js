import React, { Component } from 'react'
import { Button, Table } from 'reactstrap';
import axios from 'axios';
import { BaseURL, getAccounts, accounts, updateAccount, PathToGetAccount, getPlayers, changeBool } from '../constants';

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
		axios.put(BaseURL + accounts + changeBool, JSON.parse(sessionStorage.getItem("user")))
			.then(response => {
				console.log("step one");
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
			<tr>
				<td id="playerListEntry">{item.fullName}</td>
			</tr>
		));
		return (
			<div id="login-jumbotron">
			<div id="join-leave-session" >
					<header id="header-1"><h2>Monday Night Football Squad</h2></header>
					{sessionStorage.getItem("user") !== null &&
					<div>
						<br />
						<Button id='join-list' bsStyle="primary" onClick={this.joinFunction}>Join</Button>
						<br />
						<br />
					</div>
					}
					<p id='tagline'>Here is a list of everyone that has been added already</p>
					<Table id="playerList" bordered striped>
						<thead>
						<tr>
							<th>Name</th>
						</tr>
						</thead>
						<tbody id="playerListBody">
							{playerList}
						</tbody>
					</Table>
			</div>
			</div>
		);
	}
}

export default ManageSession;
