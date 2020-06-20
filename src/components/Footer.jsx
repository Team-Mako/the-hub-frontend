import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = props =>(
    <div>
        {/*  TheHub Logo */}
        <img />

        <ul>
            <li><NavLink to="/">About Us</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
            <li><NavLink to="/">Categories</NavLink></li>
            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
        </ul>    

        <a>Terms & Conditions</a>

        <span>&copy; Team Mako</span>
    </div>
  
)

export default Footer