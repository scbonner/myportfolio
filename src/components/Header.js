import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <span className="icn-logo"><i className="material-icons">SB</i></span>
        <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/courses/html">Courses</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </header>

);

export default Header;