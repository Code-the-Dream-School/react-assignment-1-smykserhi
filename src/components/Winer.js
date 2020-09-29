import React from "react"
import X from "../images/1.png"
import O from "../images/0.png"

const Winer =(props)=>{   
    if(props.winer === "X"){
        return(                       
                <h1>Player {props.name_X} WIns! with <img className="icon" src={X} alt="X"/> </h1> 
        )
    }else{
        return(
                <h1>Player {props.name_0} WIns! with <img className="icon" src={O} alt="0"/> </h1> 
        )
    }
    
}

export default Winer