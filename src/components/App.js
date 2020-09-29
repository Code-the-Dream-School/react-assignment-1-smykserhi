import React, {Component} from 'react';
import Header from "./Header"
import Info from "./Info"
import Board from "./Board"


class Game extends Component {
state = {
  gameStarted : false,
  name_0 :"",
  name_X :"",
  board: [" "," "," "," "," "," "," "," "," "],
  currentPlayer: "X",
  winer: "no"

}
checkWiner = ()=>{
  const board = this.state.board
  const currentPlayer = this.state.currentPlayer
  if( (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
      (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
      (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
      (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
      (board[6] === currentPlayer && board[4] === currentPlayer && board[2] === currentPlayer) ||
      (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
      (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
      (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer)  
  ){
    this.setState(()=>{
      return{
        winer : this.state.currentPlayer
      }
    })
  }
}
startNewGame = ()=>{
  this.setState(()=>{
    return{
      gameStarted : false,
      board: [" "," "," "," "," "," "," "," "," "],
      name_0 :"",
      name_X :"",
      winer: "no",
      currentPlayer: "X",
    }
  })
}
resetBoard = ()=>{
  this.setState(()=>{
    return{
      board: [" "," "," "," "," "," "," "," "," "],
      winer: "no",
      currentPlayer: "X"
    }
  })
}
startGame =()=>{
  this.setState(prevState =>{
    return{
      gameStarted : !prevState.gameStarted
    }
  })
}
saveNames = (name_0, name_X)=>{
  this.setState(() =>{
    return{
      name_0,
      name_X
    }
  })
}
handelClick =(e) =>{
  let newboard = this.state.board
  if(newboard[e.target.id] === " "){
    newboard[e.target.id] = this.state.currentPlayer
    this.setState(()=>({
      board: newboard
    }))
    this.checkWiner()
    if(this.state.currentPlayer === "X"){
      this.setState(()=>({
        currentPlayer : "O"
      }))
    }else {
      this.setState(()=>({
        currentPlayer : "X"
      }))
    }
  } 
}
  render(){
    if(this.state.gameStarted){
      if(this.state.name_0 !== "" && this.state.name_0 !== ""){
        return(
          <Board 
            name_X ={this.state.name_X} 
            name_0={this.state.name_0} 
            board = {this.state.board}
            handelClick = {this.handelClick}
            startNewGame = {this.startNewGame}
            resetBoard = {this.resetBoard}
            winer = {this.state.winer}
            currentPlayer={this.state.currentPlayer}
          />
        )
      }else{ // if game started but name didn't set up
        return(
          <Info saveNames={this.saveNames}/>
        )
      }      
    }else { //if game didn't start
      return ( 
        <Header  startGame={this.startGame}/>
        );
    }
    
  }
}

export default Game;
