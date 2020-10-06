import React from 'react';
import {Consumer } from "../Context"
import ActiveGame from "./ActibveGame"
import WinerCongrats from "./WinerCongrets"

const Board =()=> {   
    return(   
      <Consumer>
        {context => {
          if(context.data.winer === "no"){
            return(
              <ActiveGame/>
            );
          }else{
            return(
              <WinerCongrats/>
            );
          }
        }}
      </Consumer>
    )
  }

export default Board;
