import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { LogoRegular } from './Assets';

function Header({ session }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__logo"><img src={LogoRegular} alt="The Hub Logo" /></NavLink>

        <ul className="site-header__menu">
          <li>
            <NavLink to="/category">
              Categories
              <FaChevronDown />
            </NavLink>
            <ul className="site-header__submenu">
              <li><NavLink to="/category/clothing">Clothing</NavLink></li>
              <li><NavLink to="/category/cooking">Cooking</NavLink></li>
              <li><NavLink to="/category/crafts">Crafts</NavLink></li>
              <li><NavLink to="/category/drinks">Drinks</NavLink></li>
              <li><NavLink to="/category/furniture">Furniture</NavLink></li>
              <li><NavLink to="/category/music">Music</NavLink></li>
              <li><NavLink to="/category/homedecor">Home Decor</NavLink></li>
              <li><NavLink to="/category/tech">Tech</NavLink></li>
              <li><NavLink to="/category/outdoors">Outdoors</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          {session ? ''
            : (
              <>
                <li><NavLink to="/login">Sign In</NavLink></li>
                <li><NavLink to="/signup" className="site-header__call-to">Sign Up</NavLink></li>
              </>
            )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
