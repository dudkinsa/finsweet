import React from 'react';
import styles from './header.module.scss';
import shape from './img/shape.svg';
import Button from '../../../../components/Button/Button';
import decorHorizontal from './img/decor-horizontal.svg';
import decorVertical from './img/decor-vertical.svg';
import facebook from './icons/facebook.svg';
import twitter from './icons/twitter.svg';
import instagram from './icons/instagram.svg';
import linkedIn from './icons/linkedIn.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <div className={styles.header__shape}>
              <img src={shape} alt="decor" />
            </div>
            <div className="caption">CONTACT US</div>
            <h2 className={styles.header__title}>
              Have a Question ? Let’s Get in Touch with us 👋
            </h2>
            <p className={styles.header__text}>
              Fill up the Form and ou team will get back to within 24 hrs
            </p>
            <form className={styles.form} action="">
              <label className={styles.form__label}>
                <span className={styles.form__help}>Name</span>
                <input className={styles.form__input} type="text" name="name" />
              </label>
              <label className={styles.form__label}>
                <span className={styles.form__help}>E-mail</span>
                <input className={styles.form__input} type="text" name="name" />
              </label>
              <label className={styles.form__label}>
                <span className={styles.form__help}>Subject</span>
                <input className={styles.form__input} type="text" name="name" />
              </label>
              <label className={styles.form__label}>
                <span className={styles.form__help}>Message</span>
                <textarea
                  className={styles.form__message}
                  placeholder="Type your Message"
                ></textarea>
              </label>
              <div className={styles.form__button}>
                <Button text={'Send Message'} />
              </div>
            </form>
          </div>
          <div className={styles.header__right}>
            <img
              className={styles.header__vertical}
              src={decorVertical}
              alt="decor"
            />
            <img
              className={styles.header__horizontal}
              src={decorHorizontal}
              alt="decor"
            />
            <div className={styles.header__inner}>
              <div className={styles.header__location}>
                <p className={styles.header__smallText}>Location</p>
                <div className={styles.header__line}></div>
                <p className={styles.header__bigText}>
                  DLF Cybercity, Bhubaneswar, India, &52050
                </p>
              </div>
              <div className={styles.header__hours}>
                <p className={styles.header__smallText}>Working Hour</p>
                <div className={styles.header__line}></div>
                <p className={styles.header__bigText}>Monday To Friday</p>
                <p className={styles.header__bigText}>9:00 AM to 8:00 PM</p>
                <p className={styles.header__smallText}>
                  Our Support Team is available 24Hrs
                </p>
              </div>
              <div className={styles.header__contact}>
                <p className={styles.header__smallText}>Contact Us</p>
                <div className={styles.header__line}></div>
                <p className={styles.header__bigText}>020 7993 2905</p>
                <p className={styles.header__smallText}>Hello@ether.com</p>
              </div>

              <div className={styles.social}>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedIn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
