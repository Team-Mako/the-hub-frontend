import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { LogoRegular } from './Assets';

const Footer = () =>(
  <section className="site-footer">
    <div className="site-footer__inner">

      <NavLink to="/" className="site-footer__logo"><img src={ LogoRegular } alt="The Hub Logo"/></NavLink>

      <p><NavLink to="/">Terms & Conditions</NavLink> <span>&copy; Team Mako 2020</span></p>

      <ul>
          <li><NavLink to="/">Categories <FaChevronDown /> </NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/">Contact</NavLink></li>
          <li><NavLink to="/">Sign In</NavLink></li>
      </ul>

    </div>
  </section>
)

export default Footer;
