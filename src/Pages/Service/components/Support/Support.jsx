import React from 'react';
import styles from './support.module.scss';

const Support = ({ services }) => {
  return (
    <div className={styles.support} id="support">
      <div className="container">
        <div className={styles.support__wrapper}>
          <div className={styles.support__box} key={services[0].id}>
            <div className={styles.support__text}>
              <h4 className={styles.support__title}>{services[0].title}</h4>
              <h3 className={styles.support__subtitle}>
                {services[0].subtitle}
              </h3>
              <p className={styles.support__desc}>{services[0].description}</p>
            </div>
            <img
              className={`${styles.support__img}`}
              src={services[0].image}
              alt={services[0].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
