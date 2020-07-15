import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { LogoRegular, NoPic } from './Assets';

const Header = ({ session, searchBar }) => (
  <header className="site-header">
    <div className="site-header__inner">
      <NavLink to="/" className="site-header__logo"><img src={LogoRegular} alt="The Hub Logo" /></NavLink>
      {searchBar
        ? (
          <form className="forms__search">
            <input type="search" placeholder="What do you want to create?" />
            <button type="button"><span aria-hidden="true" className="visually-hidden">Search Button</span><FaSearch /></button>
          </form>
        )
        : <></>}

      <ul className="site-header__menu">
        <li>
          <NavLink to="/category">
            Categories
            <FaChevronDown />
          </NavLink>
          <ul className="site-header__submenu">
            <li><NavLink to="/category/clothing">Clothing</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {session ? (
          <>
            <li><NavLink to="/create-project" className="site-header__call-to">Create a Project</NavLink></li>
            <li><NavLink to="/my-projects" className="site-header__avatar"><img src={NoPic} alt="User Avatar" /></NavLink></li>
          </>
        )
          : (
            <>
              <li><NavLink to="/signin">Sign In</NavLink></li>
              <li><NavLink to="/signup" className="site-header__call-to">Sign Up</NavLink></li>
            </>
          )}
      </ul>
    </div>
  </header>
);

export default Header;
