import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = props =>(
    <div>
        {/*  TheHub Logo */}
        <img />

        <ul>
            <li><NavLink to="/">About Us</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
            <li><NavLink to="/">Categories</NavLink></li>
            <li><NavLink to="/">Sign In</NavLink></li>
        </ul>  

        <button>Sign Up</button>
    </div>
)

export default Header