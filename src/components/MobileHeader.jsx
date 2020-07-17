import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { LogoRegular, NoPic } from './Assets';
import api from '../services/api';

const MobileHeader = ({ user }) => {
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/list-category');
      setCategories(response.data);
    }

    getCategories();
  }, []);

  const toggleMenu = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-header__inner">
          <NavLink to="/" className="mobile-header__logo"><img src={LogoRegular} alt="The Hub Logo" /></NavLink>
          <button type="button" className="mobile-header__btn" onClick={toggleMenu}><span aria-hidden="true" className="visually-hidden">Menu Button</span><FaBars /></button>
        </div>
      </header>

      <div className={active ? 'mobile-menu--active' : 'mobile-menu'}>
        <div className="mobile-menu__top">
          <figure>
            <img src={NoPic} alt="User Avatar" />
          </figure>
          <div className="mobile-menu__info">
            <p className="mobile-menu__name">{user.user_name}</p>
            <p className="mobile-menu__email">{user.user_email}</p>
          </div>
        </div>
        <div className="mobile-menu__bottom">
          <ul className="site-header__menu">
            <li>
              <a href="/category">
                Categories
              </a>
              <ul className="site-header__submenu">
                <li><NavLink to="/category/clothing">Clothing</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <button type="button" className="mobile-menu__close-btn" onClick={toggleMenu}><span aria-hidden="true" className="visually-hidden">Close Button</span><FaTimes /></button>
      </div>
    </>
  );
};

export default connect((state) => ({
  user: state.user,
}))(MobileHeader);
