import React from 'react';
import { NavLink } from 'react-router-dom';
import './mobileMenu.scss';

const MobileMenu = ({ active, setActive }) => {
  const activeLink = 'menu-list__link mobile-menu__link--active';
  const normalLink = 'menu-list__link';

  const activeNav = 'mobile-menu__wrapper--active';
  const normalNav = 'mobile-menu__wrapper';

  return (
    <div className={active ? activeNav : normalNav}>
      <nav className="mobile__menu">
        <ul className="menu-list">
          <li className="menu-list__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => {
                setActive(!active);
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => {
                setActive(!active);
              }}
              to="/service"
            >
              Service
            </NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => {
                setActive(!active);
              }}
              to="/company"
            >
              Company
            </NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => {
                setActive(!active);
              }}
              to="/career"
            >
              Career
            </NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => {
                setActive(!active);
              }}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="menu-list__item">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => {
                setActive(!active);
              }}
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
