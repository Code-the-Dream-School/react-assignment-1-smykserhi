import React, {Component}  from 'react';
import Logo from "./Logo"
import Players from "./Players"
import Buttons from "./Buttons"
import Cell from "./Cell"
import Winer from "./Winer"

class Board extends Component {

  render(){
    if(this.props.winer === "no"){
      return(
        <div className="container niceFont center">
          <Logo/>
          <section className="board">            
            <Players 
              name_X = {this.props.name_X} 
              name_0={this.props.name_0}
              currentPlayer={this.props.currentPlayer}

            />
             <Cell  
                board={this.props.board} 
                handelClick= {this.props.handelClick}
              />               
            <Buttons 
              startNewGame={this.props.startNewGame}
              resetBoard = {this.props.resetBoard}
              />
          </section>
        </div>
      );
    }else{
      return(
        <div className="container niceFont center">
          <Logo/>
          <section className="board winer">            
             <Winer 
              winer={this.props.winer}
              name_X = {this.props.name_X} 
              name_0={this.props.name_0}
              />            
            <Buttons 
              startNewGame={this.props.startNewGame}
              resetBoard = {this.props.resetBoard}
              />
          </section>
        </div>
      );
    }
     
  }
}

export default Board;
