import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { LogoRegular, NoPic } from './Assets';
import { filesURL } from '../config/filesBucket';
import api from '../services/api';

const Header = ({ session, searchBar }) => {
  const [categories, setCategories] = useState([]);

  const userData = useSelector((state) => state.user);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/list-category');
      setCategories(response.data);
    }

    getCategories();
  }, []);

  return (
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
          : ''}

        <ul className="site-header__menu">
          <li>
            <a href="/#category">
              Categories
              <FaChevronDown />
            </a>
            <ul className="site-header__submenu">
              {categories.map((category) => (
                <li key={category.category_id}><NavLink to={`/category/${category.category_slug}`}>{category.category_title}</NavLink></li>
              ))}
            </ul>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          {session ? (
            <>
              <li><NavLink to="/create-project" className="site-header__call-to">Create a Project</NavLink></li>
              <li><NavLink to="/my-projects" className="site-header__avatar"><img src={userData.user_avatar ? filesURL + userData.user_avatar : NoPic} alt="User Avatar" /></NavLink></li>
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
};

export default Header;
