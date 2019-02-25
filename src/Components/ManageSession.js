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
		for(let i=0; i<this.state.staff.length; i++){
		this.setState({
		players : this.state.players.concat(this.state.staff[i].fullName),
		
		})
	}
	});
	
	this.method = (event) =>  {

		console.log(sessionStorage.getItem("user"));	


		axios.put(BaseURL +  accounts + "/changeBool/" ,JSON.parse(sessionStorage.getItem("user")))
	.then(response => {
// http://localhost:8081/accounts/changeBool/"
	console.log("yay");
	console.log(!JSON.parse(sessionStorage.getItem("user")).playing);	
	})}
	
	
}

	render() {
	
		return (
			<div id="join-leave-session">

				<header id="header-1"><h2>Monday Night Football Squad</h2></header>
				<br /><br />
				
				<Button id='join-list' bsStyle="primary" onClick={this.update}>List display</Button>
				<Button id='join-list' bsStyle="primary" onClick={this.method}>Join</Button>
				<p id='tagline'>Here is a list of everyone that has been added already</p>
				<ul>	
				{this.state.players.map((fullName) => <li>{fullName}</li>)}
				</ul>
				
			</div>
		);
	}
}

export default ManageSession;
