import React, {Component} from 'react';
import Button from "react-bootstrap/Button"
import Logo from "./Logo"
import X from "../images/1.png"
import O from "../images/0.png"
import {Consumer} from "../Context"
import {Link} from "react-router-dom"

class Info extends Component{
  playerNameX = React.createRef()
  playerName0 = React.createRef()
  render(){
    return(
      <Consumer>
        {context =>{          
          return(
            <div className="container niceFont center">  
              <Logo/>
              <form className="text-center" onSubmit={(e)=>{
                            e.preventDefault()                            
                            context.actions.saveNames(this.playerName0.current.value, this.playerNameX.current.value)//get value from playerInput
                            if(this.playerName0.current.value !== "" && this.playerNameX.current.value !== ""){
                              e.target.reset()//reset input field to default
                              this.props.history.push("/game")
                            }
                        }}>
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
                <div className="inputButtons">
                  <Button className="statButton " type="submit"  variant="dark">Start Game</Button>{' '} 
                  <Link to="/"><Button className="statButton " type="submit"  variant="dark">Beck</Button>{' '} </Link>
                </div>       
               
              </form>
            </div>
                )
              }}
        </Consumer>      
    )
  }
}


export default Info;
