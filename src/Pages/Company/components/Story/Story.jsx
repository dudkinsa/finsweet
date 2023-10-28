import React from 'react';
import styles from './story.module.scss';
import uuid from 'react-uuid';
import shape from './img/shape.svg';
import decorHorizontal from './img/decor-horizontal.svg';

function id() {
    return uuid();
  }
  

const statistics = [
  {
    class: `${styles.statistics}`,
    title: '1560+',
    image: decorHorizontal,
    text: 'Project Delivered',
  },
  {
    class: `${styles.statistics}`,
    title: '100+',
    image: decorHorizontal,
    text: 'Professional',
  },
  {
    class: `${styles.statistics}`,
    title: '950+',
    image: decorHorizontal,
    text: 'PHappy Client',
  },
  {
    class: `${styles.statistics}`,
    title: '10 yrs',
    image: decorHorizontal,
    text: 'Experience',
  },
];

const Story = () => {
  return (
    <div className={styles.story}>
      <div className="container">
        <div className={styles.story__wrapper}>
          <div className={styles.story__right}>
            <img src={shape} alt="decor" />
            <h6>Our Story 👇</h6>
            <h3>From Startups to Titans of Industry</h3>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up
            </p>
          </div>
          <div className={styles.story__left}>
            {statistics.map((statistic) => {
              return (
                <div className={statistic.class} key={id()}>
                  <h3>{statistic.title}</h3>
                  <img src={statistic.image} alt="Decor" />
                  <p>{statistic.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
