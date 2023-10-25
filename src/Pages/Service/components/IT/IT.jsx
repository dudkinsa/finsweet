import React from 'react';
import styles from './it.module.scss';

                      

const IT  = ({ services }) => {
  return (
    <div className={styles.it} id = "it">
      <div className="container">
        <div className={styles.it__wrapper}>
          <div className={styles.it__box} key={services[4].id}>
          
            <div className={styles.it__text}>
              <h4 className={styles.it__title}>
                {services[4].title}
              </h4>
              <h4 className={styles.it__subtitle}>
                {services[4].subtitle}
              </h4>
              <p className={styles.it__desc}>
                {services[4].description}
              </p>
            </div>
            <img
              className={`${styles.it__img}`}
              src={services[4].image}
              alt={services[4].title}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default IT;
