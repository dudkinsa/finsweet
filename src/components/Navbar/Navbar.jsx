import React from 'react';
import './navbar.scss';

import logo from '../../assets/img/logo.svg';
import prev from '../../assets/icon/icon-prev.svg'

const Navbar = () => {


  return (
    <div className="header">
      <div className="container">
        <div className="header__navbar">
          <a className="header__logo" href="/">
            <img src={logo} alt="Logo" />
          </a>

          <nav className="header__nav">
            <ul className="nav-list">
              <li className="nav-list__item"><a href="!#" active>Home</a></li>
              <li className="nav-list__item"><a href="!#">Service</a></li>
              <li className="nav-list__item"><a href="!#">Company</a></li>
              <li className="nav-list__item"><a href="!#">Career</a></li>
              <li className="nav-list__item"><a href="!#">Blog</a></li>
              <li className="nav-list__item"><a href="!#">Contact us</a></li>
            </ul>
          <div className="header__clone">
            <a href="!#">Clone projects <img src={prev} alt="Icon prev" /></a>
          </div>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
