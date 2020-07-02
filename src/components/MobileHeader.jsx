import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { LogoRegular, UserAvatar } from './Assets';

function MobileHeader() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <section className="mobile-header">
        <div className="mobile-header__inner">
          <NavLink to="/" className="mobile-header__logo"><img src={LogoRegular} alt="The Hub Logo" /></NavLink>
          <button type="button" className="mobile-header__btn" onClick={toggleMenu}><span aria-hidden="true" className="visually-hidden">Menu Button</span><FaBars /></button>
        </div>
      </section>

      <div className={active ? 'mobile-menu--active' : 'mobile-menu'}>
        <div className="mobile-menu__top">
          <figure>
            <img src={UserAvatar} alt="User Avatar" />
          </figure>
          <div className="mobile-menu__info">
            <p className="mobile-menu__name">Laura Monné</p>
            <p className="mobile-menu__email">laura@laura.com</p>
          </div>
        </div>
        <div className="mobile-menu__bottom">
          <ul>
            <li>a</li>
          </ul>
        </div>
        <button type="button" className="mobile-menu__close-btn" onClick={toggleMenu}><span aria-hidden="true" className="visually-hidden">Close Button</span><FaTimes /></button>
      </div>
    </>
  );
}

export default MobileHeader;
