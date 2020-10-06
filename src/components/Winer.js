import React from "react"
import X from "../images/1.png"
import O from "../images/0.png"
import {Consumer} from "../Context"

const Winer =(props)=>{   
    return(
        <Consumer>
            {context =>{
                if(context.data.winer === "X"){
                    return( <h1>Player {context.data.name_X} WIns! with <img className="icon" src={X} alt="X"/> </h1> )
                }else  if(context.data.winer === "O"){
                    return(<h1>Player {context.data.name_0} WIns! with <img className="icon" src={O} alt="0"/> </h1> )
                }else {
                    return(<h1>You are great players try again!!!!<img className="icon" src={O} alt="0"/> </h1> )
                }
            }}
        </Consumer>
    ) 
}

export default Winer