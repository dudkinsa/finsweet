import React from 'react';
import styles from './azure.module.scss';

const Azure  = ({ services }) => {
  return (
    <div className={styles.azure} id = "azure">
      <div className="container">
        <div className={styles.azure__wrapper}>
          <div className={styles.azure__box} key={services[2].id}>
            <div className={styles.azure__text}>
              <h4 className={styles.azure__title}>
                {services[2].title}
              </h4>
              <h3 className={styles.azure__subtitle}>
                {services[2].subtitle}
              </h3>
              <p className={styles.azure__desc}>
                {services[2].description}
              </p>
            </div>
            <img
              className={`${styles.azure__img}`}
              src={services[2].image}
              alt={services[2].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azure ;
