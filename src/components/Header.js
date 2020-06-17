import React from 'react';
import { NavLink } from 'react-router-dom';
import CSS from '../css/index.css';



const Header = () => {
   return (
    <header>
        <span className="logo"><i className="letters">SB</i></span>
          <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </header> 
  
  
 
  )
}

            
 
export default Header

