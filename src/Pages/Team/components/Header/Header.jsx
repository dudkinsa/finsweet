import React from 'react';
import styles from './header.module.scss';
import egorov from './avatars/egorov.jpg';
import facebook from './icon/facebook.svg';
import twitter from './icon/twitter.svg';
import instagram from './icon/instagram.svg';


const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
            <div className={styles.person}>
          <img className={styles.person__avatar} src={egorov} alt="avatar" />
          <h3 className={styles.person__name}>Igor Egorov</h3>
          <p className={styles.person__job}> React developer</p>
          <p className={styles.person__infoText}>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
          <div className={styles.person__social}>
            <a className={styles.person__icon} href="#!"><img src={facebook} alt="Facebook" /></a>
            <a className={styles.person__icon} href="#!"><img src={twitter} alt="Twitter" /></a>
            <a className={styles.person__icon} href="#!"><img src={instagram} alt="Instagramm" /></a>
          </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
