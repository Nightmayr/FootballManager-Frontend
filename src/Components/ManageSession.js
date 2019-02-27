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
			message: " ",
			joinButton: ""
		}

	}



	componentDidMount() {

		axios.get(BaseURL + accounts + getPlayers)
			.then(trueplayers => {
				this.setState({
					players: trueplayers.data,
				});
				this.joinButton();
			})
		
	}

	joinButton = () => {
		if(JSON.parse(sessionStorage.getItem("user")).playing === true) {
			this.setState({ joinButton: "Remove"});
		} else {
			this.setState({ joinButton: "Join" });
		}
	}

	joinFunction = (event) => {
		axios.put(BaseURL + accounts + changeBool, JSON.parse(sessionStorage.getItem("user")))
			.then(response => {
				axios.get(BaseURL + PathToGetAccount + JSON.parse(sessionStorage.getItem("user")).accountId)
					.then(response => {
						sessionStorage.setItem("user", JSON.stringify(response.data));
						axios.get(BaseURL + accounts + getPlayers)
							.then(trueplayers => {
								this.setState({
									players: trueplayers.data,
									message: "List has been updated"
								});
								this.joinButton();
							})
					})
			})
	}

	render() {
		const playerList = this.state.players.map((item, i) => (
			<tr>
				<td id="playerNo">{i+1}</td>
				<td id="playerListEntry">{item.fullName}</td>
			</tr>
		));
		return (
			<div id="join-leave-session" >
				<div id="session-text">
					<header id="header-1"><h2>Monday Night Football Squad</h2></header>
					{sessionStorage.getItem("user") !== null &&
					<div>
						<br />
						<Button id='join-list' bsStyle="primary" onClick={this.joinFunction}>
						{this.state.joinButton}
						</Button>
						<br />
						<br />
					</div>
					}
					<p id='updateMessageJoin'>{this.state.message}</p>
				</div>
					<div id="scrollTable">
					<Table id="playerList" bordered striped responsive size="l">
						<thead>
						<tr>
							<th scope="row" id="number">#</th>
							<th id="name">Name</th>
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
