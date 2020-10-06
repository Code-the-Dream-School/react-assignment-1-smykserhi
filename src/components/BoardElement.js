import React from "react"
import X from "../images/1.png"
import O from "../images/0.png"



 const BoardElemt = (props)=>
 {
     if(props.el === "X"){
        return (            
            <div className="playItem" id ={props.index} onClick={props.handelClick}><img className="icon" src={X} alt="O"/></div>
        )
     }else if(props.el === "O"){
        return (            
            <div className="playItem" id ={props.index} onClick={props.handelClick}><img className="icon" src={O} alt="O"/></div>
        )
     }else {
        return (            
            <div className="playItem" id ={props.index} onClick={props.handelClick}></div>
        )
     }
        
 }
 
 
 export default BoardElemt