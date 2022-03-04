import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
         <NavLink to="/home" 
         activeStyle={{
         fontWeight: "bold",
         color: "blue"
    }}>Home</NavLink>
         <NavLink to="/friends" activeStyle={{
    fontWeight: "bold",
    color: "blue"
  }}>Friends</NavLink>
         <NavLink to="/about" activeStyle={{
    fontWeight: "bold",
    color: "blue"
  }}>About</NavLink>
         <NavLink to="/about/culture" activeStyle={{
    fontWeight: "bold",
    color: "blue"
  }}>Culture</NavLink>
        </div>
    );
};

export default Header;