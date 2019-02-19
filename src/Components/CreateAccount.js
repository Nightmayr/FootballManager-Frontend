import React, { Component } from 'react';
import ManageSession from "./ManageSession";

class CreateAccount extends Component {

  constructor(props){
    super(props);
    this.state = {
      roomNum: this.props.roomNum,
      windowState: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
      this.setState({
        windowState: 1,
      });
    }


  render() {

    const Main = () =>{
      return(
        <div>
          <h1>Class Successfully Created</h1>
          <br/><br/>
          <p>Room No: {this.state.roomNum}</p><br/>
        </div>
      );
    }


    return (
      <div>
        {this.state.windowState===0 && <Main/>}
        {this.state.windowState===1 && <ManageSession roomNum = {this.state.roomNum}/>}
      </div>
    );
  }
}


export default CreateAccount;
