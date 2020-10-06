import React from "react"
import Logo from "./Logo"
import Players from "./Players"
import Cell from "./Cell"
import Buttons from "./Buttons"

 const ActiveGame = ()=>{
     return(
        <div className="container niceFont center">
        <Logo/>
        <section className="board">            
          <Players />
          <Cell />               
          <Buttons />
        </section>
      </div>
     )
 }
 export default ActiveGame