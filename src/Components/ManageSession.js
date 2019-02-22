import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BaseURL, getAccounts , accounts, updateAccount } from '../constants';

class ManageSession extends Component {
	constructor(props) {
		super(props);

		this.state = {
			staff: [],
			players: [],
			fullName: "",
			temp:"",
		}
	
		this.update = (event) => {
			for(let i=0; i<this.state.staff.length; i++){
			this.state.players = this.state.players.concat(this.state.staff[i].fullName);
			this.state.players = this.state.players.filter((val, id, array) => {
				return array.indexOf(val) === id;
			});
		}
		this.setState({});
		}
		
}

componentDidMount(){

	axios.get(BaseURL +  accounts + getAccounts)
	.then(response => {

		let stuff1 = this.state.players;

		console.log("hit");
		this.setState({
		  staff: response.data,
		  fullName: response.data[0].fullName
		});
		for(let i=0; i<this.state.staff.length; i++){
			
			stuff1 = this.state.players.concat(this.state.staff[i].fullName);
			stuff1 = this.state.players.filter((val, id, array) => {
				return array.indexOf(val) === id;
			});
		}

		this.setState({
			players: stuff1		
		})
		console.log(stuff1);
	});
	
	this.method = (event) =>  {
		axios.put(BaseURL +  accounts + "/changeBool/" + JSON.parse(sessionStorage.getItem("user")).accountId, sessionStorage.getItem("user"))
	.then(response => {



	})}
	
	
}

	render() {
	
		return (
			<div id="join-leave-session">

				<header id="header-1"><h2>Monday Night Football Squad</h2></header>
				<br /><br />
				{this.update}
				<Button id='join-list' bsStyle="primary" onClick={this.update}>Join</Button>
				<Button id='join-list' bsStyle="primary" onClick={this.method}>noiJ</Button>
				<p id='tagline'>Here is a list of everyone that has been added already</p>
				<ol>	
				{this.state.players.map((fullName) => <li>{fullName}</li>)}
				</ol>
				
			</div>
		);
	}
}

export default ManageSession;
