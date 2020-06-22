import React from 'react';
import Logo from '../assets/static/the_hub_logo_white.svg';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Footer = () =>(
  <section className="site-footer">
    <div className="site-footer__inner">

      <NavLink to="/" className="site-footer__logo"><img src={ Logo } alt="The Hub Logo"/></NavLink>

      <div className="site-footer__right">

        <ul>
            <li><NavLink to="/">Categories <FaChevronDown /> </NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
            <li><NavLink to="/">Sign In</NavLink></li>
        </ul>

        <p><NavLink to="/">Terms & Conditions</NavLink> <span>&copy; Team Mako 2020</span></p>

      </div>

    </div>
  </section>
)

export default Footer;
