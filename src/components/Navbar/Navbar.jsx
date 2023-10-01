import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import prev from '../../assets/icon/icon-prev.svg';
import MobileButton from '../MobileButton/MobileButton';

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <div className="navbar">
      <div className="container">
        <MobileButton />
        <div className="navbar__wrapper">
          <NavLink className="navbar__logo" to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          {/* <MobileButton /> */}
          

          <nav className="navbar__nav">
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/company"
                >
                  Company
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/career"
                >
                  Career
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/contact"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className="navbar__clone">
              <a href="#!">
                Clone projects <img src={prev} alt="Icon prev" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
