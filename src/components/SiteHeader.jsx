import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { LogoRegular } from './Assets';

const Header = () => (
  <section className="site-header">
    <div className="site-header__inner">
      <NavLink to="/" className="site-header__logo"><img src={ LogoRegular } alt="The Hub Logo" /></NavLink>

      <ul>
          <li><NavLink to="/">Categories <FaChevronDown /> </NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/">Contact</NavLink></li>
          <li><NavLink to="/">Sign In</NavLink></li>
          <li><NavLink to="/" className="site-header__call-to">Sign Up</NavLink></li>
      </ul>
    </div>
  </section>
)

export default Header;
