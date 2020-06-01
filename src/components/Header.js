import React from 'react';
import { NavLink } from 'react-router-dom';
import CSS from '../css/index.css';


const Header = () => (
    <header>
        <span className="icn-logo"><i className="material-icons">SB</i></span>
        
            <ul className="main-nav">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/projects">Projects</NavLink></li>
                <li><NavLink exact to="/courses/html">Courses</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
            </ul>
    </header>



 );

export default Header;