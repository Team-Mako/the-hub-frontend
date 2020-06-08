import React from 'react';
import { NavLink } from 'react-router-dom';

function MainNav() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <p className="site-header__title">The Hub</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories">
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/singup" className="site-header__action">
                Sing Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
