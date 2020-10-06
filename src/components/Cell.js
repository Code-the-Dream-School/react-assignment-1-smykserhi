import React, {Component}  from 'react';
import BoardElemt from './BoardElement';
import {Consumer} from "../Context"



const Cell =()=> {
  return(
    <Consumer>
      {context=>{
        return(
          <div className="playField">
            {context.data.board.map((el, index)=>       
              <BoardElemt 
                el={el}
                index={index}
                key = {index}
                handelClick = {context.actions.handelClick}
              />  
            )}      
          </div>    
        )
      }}
    </Consumer>    
  );
  }


export default Cell;
