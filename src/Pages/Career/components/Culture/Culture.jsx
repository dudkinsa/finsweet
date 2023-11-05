import React from 'react';
import styles from './culture.module.scss';
import  covid from './icons/covid.svg';
import  time from './icons/time.svg';
import  home from './icons/home.svg';
import  retreat from './icons/retreat.svg';
import  money from './icons/money.svg';
import  gym from './icons/gym.svg';

const workCultures = [
    {
        icon: covid,
        title: 'Covid-19 insurance',
        text: 'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
    },
    {
        icon: time,
        title: 'Flexible working time',
        text: 'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
    },
    {
        icon: home,
        title: 'Work from home',
        text: 'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
    },
    {
        icon: retreat ,
        title: 'Annual retreats',
        text: 'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
    },
    {
        icon: money ,
        title: 'Learning stipend',
        text: 'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
    },
    {
        icon: gym ,
        title: 'Gym membership',
        text: 'Through True Rich Attended does no end it his mother since real had halfdoes no end it',
    },
]

const Culture = () => {
  return (
    <div className={styles.culture}>
      <div className="container">
        <div className={styles.culture__wrapper}>
          <div className={styles.top}>
            <div className="caption">OUR WORK & CULTURE</div>
            <h3 className={styles.top__title}>
              Come and join a team of highly skilled professionals.
            </h3>
            <p className={styles.top__text}>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
          <div className={styles.bottom}>
            {workCultures.map(workCulture => {
                return(
                    <div className={styles.box}>
                        <img className={styles.box__image} src={workCulture.icon} alt="Icon" />
                        <h6 className={styles.box__title}>{workCulture.title}</h6>
                        <p className={styles.box__text}>{workCulture.text}</p>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
