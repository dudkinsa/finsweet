import React from 'react';
import styles from './header.module.scss';

import shape from './img/shape.svg';
import decorShape from './img/decor-shape.svg';
import decorHorizontal from './img/decor-horizontal.svg';
import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <img className={styles.header__shape} src={shape} alt="decor" />
          <img className={styles.header__decor} src={decorShape} alt="decor" />
          <div className={styles.header__top}>
            <div className="caption"> Company</div>
            <h2>
              Award-winning Company seen and used by millions around the world.
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.
            </p>
          </div>
          <div className={styles.header__bottom}>
            <img  className = {styles.header__bottomDecor}src={decorHorizontal} alt="decor" />
            <div className={styles.header__images}>
            <img src={image1} alt="image" />
            <img src={image2} alt="image" />
            <img src={image3} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
