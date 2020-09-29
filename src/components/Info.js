import React, {Component} from 'react';
import Button from "react-bootstrap/Button"
import Logo from "./Logo"
import X from "../images/1.png"
import O from "../images/0.png"

class Info extends Component{
  playerNameX = React.createRef()
  playerName0 = React.createRef()
  handleSubmit =(e)=>{
    e.preventDefault()
    this.props.saveNames(this.playerName0.current.value, this.playerNameX.current.value)//get value from playerInput
     e.target.reset()//reset input field to default
}
  render(){
    return(
      <div className="container niceFont center">  
        <Logo/>
        <form className="text-center" onSubmit={this.handleSubmit}>
          <div className="inptFields"> 
            <div className="lable text-left">
              <label>Name <img className="icon" src={X} alt="X"/></label>
              <input ref={this.playerNameX} type="text" name="name" />
            </div>
            <div className="lable text-left">
              <label>Name <img className="icon" src={O} alt="O"/></label>
              <input ref={this.playerName0} type="text" name="name" />
            </div>
          </div>          
          <Button className="statButton " type="submit"  variant="dark">Start Game</Button>{' '} 
        </form>
      </div>
    )
  }
}


export default Info;
