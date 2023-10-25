import React from 'react';
import styles from './consulting.module.scss';

const Сonsulting = ({ services }) => {
  return (
    <div className={styles.consulting} id="consulting">
      <div className="container">
        <div className={styles.consulting__wrapper}>
          <div className={styles.consulting__box} key={services[3].id}>
            <img
              className={`${styles.consulting__img}`}
              src={services[3].image}
              alt={services[3].title}
            />
            <div className={styles.consulting__text}>
              <h4 className={styles.consulting__title}>{services[3].title}</h4>
              <h3 className={styles.consulting__subtitle}>
                {services[3].subtitle}
              </h3>
              <p className={styles.consulting__desc}>
                {services[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Сonsulting;
