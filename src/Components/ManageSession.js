import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class ManageSession extends Component {
	constructor(props) {
		super(props);

		this.state = {
			roomNum: ''
		}
	}
	render() {
		return (
			<div id="join-leave-session">

				<header id="header-1"><h2>Monday Night Football Portal</h2></header>
				<br /><br />
				<Button id='join-list' bsStyle="primary" onClick={this.props.genRoomNumClick}>Join</Button>
				
				<p id='tagline'>Here is a list of everyone that has been added already</p>
			</div>
		);
	}
}

export default ManageSession;
