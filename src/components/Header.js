import React from 'react';
import Button from "react-bootstrap/Button"
import Logo from "./Logo"
import {Consumer} from "../Context"
import {Link} from "react-router-dom"

const Header = (props) => {
  return(
    <Consumer>
      {context =>{
        return(
          <div className="container niceFont center">      
              <Logo/>        
              <Link to="/name"><Button onClick={context.actions.startGame} className="mt-4" variant="dark">Start</Button>{' '}  </Link>        
          </div>
        )
      }}
    </Consumer>
   
  );
}

export default Header;
