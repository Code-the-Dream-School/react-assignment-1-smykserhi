import React, {Component}  from 'react';
import BoardElemt from './BoardElement';



class  Cell extends Component {

render(){
  return(
    <div className="playField">
      {this.props.board.map((el, index)=>       
         <BoardElemt 
          el={el}
          index={index}
          key = {index}
          handelClick = {this.props.handelClick}
        />  
      )}
      
    </div>
    
  );
  }

}
export default Cell;
