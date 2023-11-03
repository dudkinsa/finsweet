import React from 'react';
import styles from './header.module.scss';
import shape from './img/decor-shape.svg';
import imageText from './img/image-text.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <img className={styles.header__decor} src={shape} alt="" />
          <div className={styles.header__top}>
            <div className="caption">CAREER AT FINSWEET</div>
            <h2 className={styles.header__title}>
              We hired people who are Always Passionate about what they do
            </h2>
            <p className={styles.header__text}>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw.
            </p>
          </div>
          <img className={styles.header__imageText} src={imageText} alt="" />
          <div className={styles.header__bottom}>
            <p>See Our open positions</p>
            <p>👇</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
