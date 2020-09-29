import React from "react"
import X from "../images/1.png"
import O from "../images/0.png"

const Players = (props)=>{
    let activePlayerX
    let activePlayer0
    if(props.currentPlayer === "X"){
        activePlayerX = "active"
        activePlayer0 = "noActive"
    }else {
        activePlayerX = "noActive"
        activePlayer0 = "active"
    }
    return(
        <div className="players">
            <span className={activePlayerX}><img className="icon" src={X} alt="X"/> player: {props.name_X}</span>
            <span className={activePlayer0}><img className="icon" src={O} alt="X"/> player: {props.name_0}</span>
        </div>
    )
}
export default Players