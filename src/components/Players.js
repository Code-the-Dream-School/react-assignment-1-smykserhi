import React from "react"
import X from "../images/1.png"
import O from "../images/0.png"
import {Consumer} from "../Context"

const Players = (props)=>{
    return(
        <Consumer>
            {context =>{
                let activePlayerX
                let activePlayer0
                if(context.data.currentPlayer === "X"){
                    activePlayerX = "active"
                    activePlayer0 = "noActive"
                }else {
                    activePlayerX = "noActive"
                    activePlayer0 = "active"
                }
                return(
                    <div className="players">
                        <span className={activePlayerX}><img className="icon" src={X} alt="X"/> player: {context.data.name_X}</span>
                        <span className={activePlayer0}><img className="icon" src={O} alt="X"/> player: {context.data.name_0}</span>
                    </div>
                )
            }}
        </Consumer>
    )
    

    
    
}
export default Players