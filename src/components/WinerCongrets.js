import React from "react"
import Logo from "./Logo"
import Winer from "./Winer"
import Buttons from "./Buttons"

const WinerCongrats = ()=>{
    return (
        <div className="container niceFont center">
                <Logo/>
                <section className="board winer">            
                  <Winer />            
                  <Buttons />
                </section>
         </div>       
    )
}
export default WinerCongrats