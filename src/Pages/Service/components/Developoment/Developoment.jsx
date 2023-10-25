import React from 'react';
import styles from './developoment.module.scss';

const Developoment = ({ services }) => {
  return (
    <div className={styles.developoment} id="developoment">
      <div className="container">
        <div className={styles.developoment__wrapper}>
          <div className={styles.developoment__box} key={services[1].id}>
            <img
              className={`${styles.developoment__img}`}
              src={services[1].image}
              alt={services[1].title}
            />
            <div className={styles.developoment__text}>
              <h4 className={styles.developoment__title}>
                {services[1].title}
              </h4>
              <h3 className={styles.developoment__subtitle}>
                {services[1].subtitle}
              </h3>
              <p className={styles.developoment__desc}>
                {services[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developoment;
