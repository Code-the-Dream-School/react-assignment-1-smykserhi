import React from 'react';
import Button from "react-bootstrap/Button"
import Logo from "./Logo"

const Header = (props) => {
  return(
    <div className="container niceFont center">      
         <Logo/>        
        <Button onClick={props.startGame} className="mt-4" variant="dark">Start</Button>{' '}          
    </div>
  );
}

export default Header;
