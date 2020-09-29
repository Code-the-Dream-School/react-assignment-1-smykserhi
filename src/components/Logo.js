import React from "react"
import logo from '../images/logo.png';

const Logo =(props)=>{
    return(
        <div>
            <img className="logo my-4 " src={logo} alt="Logo"/> 
            <h1>TIC TAC TOE</h1>
        </div>
        
    )
}
export default Logo