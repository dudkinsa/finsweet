import React from 'react';
import styles from './vision.module.scss';
import wideImage from './img/wide-image.jpg';

const Vision = () => {
  return (
    <div className={styles.vision}>
      <div className="container">
        <div className={styles.vision__wrapper}>
          <div className={styles.vision__inner}>
            <div className="caption">Our VISION</div>
            <h3 className={styles.vision__title}>
              We want to get local identification in every corner of the world
              in this era of global citizenship.
            </h3>
            <p className={styles.vision__text}>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>

          <img src={wideImage} alt="Wide Image" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
