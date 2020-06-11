import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = () => (
  <header className="site-header">
    <div className="site-header__inner">
      <div className="site-header__logo">
        The HUB Logo
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="site-header__action">Sign Up</Link>
      </nav>
    </div>
  </header>
);

export default SiteHeader;
