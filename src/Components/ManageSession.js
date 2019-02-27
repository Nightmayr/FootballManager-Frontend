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
			message: ""

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
									message: "List has been updated"
								}
								);
							})
					})
			})
	}

	render() {
		const playerList = this.state.players.map((item) => (
			<tr>
				<td>{item.fullName}</td>
			</tr>
		));
		return (
			<div id="login-jumbotron">
			<div id="join-leave-session" >
					<header id="header-1"><h2>Monday Night Football Squad</h2></header>
					<br /><br />
					<Button id='join-list' bsStyle="primary" onClick={this.joinFunction}>Join</Button>
					<br></br>
					<br></br>
					<p id='updateMessageJoin'>{this.state.message}</p>
					<Table id="playerList" bordered striped>
						<thead>
						<tr>
							<th>Name</th>
						</tr>
						</thead>
						<tbody>
							{playerList}
						</tbody>
					</Table>
			</div>
			</div>
		);
	}
}

export default ManageSession;
