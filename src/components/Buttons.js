import React from "react"
import Button from "react-bootstrap/Button"

const Buttons = (props)=>{
    return(
        <div className="buttons">
            <Button variant="dark" onClick={props.startNewGame}>New Game</Button>{' '} 
            <Button variant="dark" onClick = {props.resetBoard}>Reset</Button>{' '} 
        </div>
        
    )
}

export default Buttons