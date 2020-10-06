import React from 'react';
import Header from "./Header"
import Info from "./Info"
import Board from "./Board"
import { BrowserRouter, Route} from "react-router-dom"


const Game = ()=>{
    return(
      <BrowserRouter>
        <Route exact path="/" component={Header}/>
        <Route path="/name" component={Info}/>
        <Route path="/game" component={Board}/>        
      </BrowserRouter>
    )    
  }

export default Game;
