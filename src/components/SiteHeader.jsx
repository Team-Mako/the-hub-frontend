import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { LogoRegular } from './Assets';

const Header = () => (
  <section className="site-header">
    <div className="site-header__inner">
      <NavLink to="/" className="site-header__logo"><img src={ LogoRegular } alt="The Hub Logo" /></NavLink>

      <ul>
          <li>Categories <FaChevronDown /> 
            {/* <ul>
              <li><NavLink to="/category/clothing">Clothing</NavLink></li>
              <li><NavLink to="/category/cooking">Cooking</NavLink></li>
              <li><NavLink to="/category/crafts">Crafts</NavLink></li>
              <li><NavLink to="/category/drinks">Drinks</NavLink></li>
              <li><NavLink to="/category/furniture">Furniture</NavLink></li>
              <li><NavLink to="/category/music">Music</NavLink></li>
              <li><NavLink to="/category/homedecor">Home Decor</NavLink></li>
              <li><NavLink to="/category/tech">Tech</NavLink></li>
              <li><NavLink to="/category/outdoors">Outdoors</NavLink></li>
            </ul> */}
          </li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/">Contact</NavLink></li>
          <li><NavLink to="/">Sign In</NavLink></li>
          <li><NavLink to="/" className="site-header__call-to">Sign Up</NavLink></li>
      </ul>
    </div>
  </section>
)

export default Header;
