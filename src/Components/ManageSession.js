import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BaseURL, getAccounts , accounts, updateAccount, PathToGetAccount, getPlayers } from '../constants';

class ManageSession extends Component {
	constructor(props) {
		super(props);

		this.state = {
			staff: [],
			playersAsObject: [],
			players: []

		}
	
		// this.update = (event) => {
		// 	for(let i=0; i<this.state.staff.length; i++){
		// 	this.state.players = this.state.players.concat(this.state.staff[i].fullName);
		// 	this.state.players = this.state.players.filter((val, id, array) => {
		// 		return array.indexOf(val) === id;
		// 	});
		// }
		// this.setState({});
		// }
		
}

componentDidMount(){
	
	axios.get(BaseURL + accounts + getPlayers)
		.then( trueplayers => {
			console.log("step three");
		this.setState({
		players : trueplayers.data,
	
		// players : this.state.playersAsObject.fullName
	
	  });
	})
// 		axios.put(BaseURL +  accounts + "/changeBool/" ,JSON.parse(sessionStorage.getItem("user")))
// .then(response => {
// 	console.log("step one");
// // http://localhost:8081/accounts/changeBool/"


// 		axios.get(BaseURL + PathToGetAccount + JSON.parse(sessionStorage.getItem("user")).accountId)
// 		.then(response => {
// 			console.log("step two");
// 		sessionStorage.setItem("user", JSON.stringify(response.data));

// 				//   console.log(this.state.playersAsObject);
// 				//   console.log(this.state.playersAsObject[0].fullName);
				
				  
				
				  
					 
// 			})


// 		})	


}


joinFunction = (event) =>  {

	
	axios.put(BaseURL +  accounts + "/changeBool/" ,JSON.parse(sessionStorage.getItem("user")))
.then(response => {
	console.log("step one");
// http://localhost:8081/accounts/changeBool/"


		axios.get(BaseURL + PathToGetAccount + JSON.parse(sessionStorage.getItem("user")).accountId)
		.then(response => {
			console.log("step two");
		sessionStorage.setItem("user", JSON.stringify(response.data));

				axios.get(BaseURL + accounts + getPlayers)
					.then( trueplayers => {
						console.log("step three");
					this.setState({
					players : trueplayers.data,

			   
				   }
				//    , () => {
				// 	for(let i = 0 ; i < this.state.playersAsObject.length ; i++) {
				// 		console.log(this.state.playersAsObject[i].fullName);
				// 		// this.setState({ players: this.state.players.push(this.state.playersAsObject[i].fullName) })
	
				// 	  }
				// 	  console.log(this.state.playersAsObject);
				// 	  console.log(this.state.players);
				//    }
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
			<div id="join-leave-session">

				<header id="header-1"><h2>Monday Night Football Squad</h2></header>
				<br /><br />
				
				
				<Button id='join-list' bsStyle="primary" onClick={this.joinFunction}>Join</Button>
				<p id='tagline'>Here is a list of everyone that has been added already</p>
				<ul>	
				{/* {this.state.players.map((name) => <li>{name}</li>)} */}
				{playerList}
				</ul>
				
			</div>
		);
	}
}

export default ManageSession;
