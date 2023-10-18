import React from 'react';
import styles from './header.module.scss';
import Button from '../../../../components/Button/Button';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <div className={styles.caption}>Our Services</div>
            <h2>
              We Build Software Solutionthat Solve Clients Business Challenges
            </h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>
            <div className={styles.button}>
              <Button text={'Request A Quote'} />
            </div>
          </div>
          <div className={styles.header__right}>
            <Link to="support" smooth={true}>
              Technical support
            </Link>
            <Link to="support" smooth={true}>
              Development
            </Link>
            <Link to="support" smooth={true}>
              AWS/Azure
            </Link>
            <Link to="support" smooth={true}>
              Consulting
            </Link>
            <Link to="support" smooth={true}>
              Information Technology
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
