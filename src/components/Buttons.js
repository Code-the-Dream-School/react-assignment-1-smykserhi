import React from "react"
import Button from "react-bootstrap/Button"
import {Consumer} from "../Context"
import {Link} from "react-router-dom"


const Buttons = (props)=>{
    return(
        <Consumer>
            {context =>{
                return(
                    <div className="buttons">
                        <Link to="/"><Button variant="dark" onClick={context.actions.startNewGame}>New Game</Button>{' '} </Link>
                        <Button variant="dark" onClick = {context.actions.resetBoard}>Reset</Button>{' '} 
                    </div>
                )
            }}
        </Consumer>
        
        
    )
}

export default Buttons