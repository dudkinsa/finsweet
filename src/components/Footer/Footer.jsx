import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
import shape from './img/shape.svg';
import shape2 from './img/shape-2.svg';
import line from './img/line.svg';
import iconPrev from './icon/icon-prev.svg';
import logoDark from './icon/logo-dark.svg';
import facebook from './icon/facebook.svg';
import twitter from './icon/twitter.svg';
import instagram from './icon/instagram.svg';
import linkedin from './icon/linkedin.svg';

const Footer = () => {
  const activeLink = 'footer-top-right__link footer-top-right__link--active';
  const normalLink = 'footer-top-right__link';
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            <img className="footer-top-left__decor" src={shape} alt="decor" />
            <h2 className="footer-top-left__title-1">
              Let's make something special
            </h2>
            <h4 className="footer-top-left__title-2">Let's talk! 🤙</h4>
            <p className="footer-top-left__phone">020 7993 2905</p>
            <p className="footer-top-left__mail">hi@finsweet.com</p>
            <img className="footer-top-left__line" src={line} alt="line" />
            <p className="footer-top-left__address">
              DLF Cybercity, Bhubaneswar, India, &52050
            </p>
          </div>

          <div className="footer-top-right">
            <ul className="footer-top-right__links">
              <li className="links__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/"
                >
                  <h6>Home</h6>
                </NavLink>
              </li>
              <li className="links__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/service"
                >
                  <h6>Service</h6>
                </NavLink>
              </li>
              <li className="links__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/company"
                >
                  <h6>Company</h6>
                </NavLink>
              </li>
              <li className="links__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/career"
                >
                  <h6>Career</h6>
                </NavLink>
              </li>
              <li className="links__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/news"
                >
                  <h6>News</h6>
                </NavLink>
              </li>
            </ul>

            <ul className="footer-top-right__services">
              <li className="services__item">
                <a href="#!">Service</a>
              </li>
              <li className="services__item">
                <a href="#!">Technical support</a>
              </li>
              <li className="services__item">
                <a href="#!">Testing</a>
              </li>
              <li className="services__item">
                <a href="#!">Development</a>
              </li>
              <li className="services__item">
                <a href="#!">AWS/Azure</a>
              </li>
              <li className="services__item">
                <a href="#!">Consulting </a>
              </li>
              <li className="services__item">
                <a href="#!">Information Technology</a>
              </li>
            </ul>

            <ul className="footer-top-right__resourses">
              <li className="services__item">
                <a href="#!">Resourses</a>
              </li>
              <li className="services__item">
                <a href="#!">Testimonial</a>
              </li>
              <li className="services__item">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="services__item">
                <a href="#!">Terms of use</a>
              </li>
              <li className="services__item">
                <a href="#!">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-right__contact">
            <img src={shape2} alt="decor" />
            <a href="#!">Contact Us</a>
            <img src={iconPrev} alt="icon prev" />
          </div>
        </div>
        </div>

        <div className="footer-bottom-left__wrapper">
            <div className="container">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <img
              className="footer-bottom-left__logo"
              src={logoDark}
              alt="Logo"
            />
            <div className="footer-bottom-left__copyright">©2021 Finsweet</div>
          </div>
          <div className="footer-bottom__social">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>

            </div>

        </div>

      
    </div>
  );
};

export default Footer;
