import React from 'react';
import styles from './logoBar.module.scss';
import uuid from 'react-uuid';

import logo1 from './img/Logo-1.svg';
import logo2 from './img/Logo-2.svg';
import logo3 from './img/Logo-3.svg';
import logo4 from './img/Logo-4.svg';
import logo5 from './img/Logo-5.svg';

function id() {
    return uuid();
  }

const logos = [
  {
    title: 'Logo',
    image: logo1,
  },
  {
    title: 'Logo',
    image: logo2,
  },
  {
    title: 'Logo',
    image: logo3,
  },
  {
    title: 'Logo',
    image: logo4,
  },
  {
    title: 'Logo',
    image: logo5,
  },
];

const LogoBar = () => {
  return (
    <div className={styles.logoBar}>
      <div className="container">
        <div className={styles.logoBar__wrapper} >
          {logos.map((logo) => {
            return <img src={logo.image} alt={logo.title} key={id()}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
