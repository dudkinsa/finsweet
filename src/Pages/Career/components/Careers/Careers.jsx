import React from 'react';
import styles from './careers.module.scss';
import iconPrev from './icons/icon-prev.svg';

const careers = [
  {
    title: 'Full Stack Developer',
    text1: 'Bengaluru · Full Time',
    text2: '$10K - $18K · No equity',
    link: '#!',
  },
  {
    title: 'Testing Engineer',
    text1: 'Remote · Full Time',
    text2: '$08K - $10K · No equity',
    link: '#!',
  },
  {
    title: 'Hr Manager',
    text1: 'Mumbai . Fultime',
    text2: '$08K - $10K · 4 to 5 Yrs Exp',
    link: '#!',
  },
  {
    title: 'Product Designer',
    text1: 'Mumbai . Fultime',
    text2: '$08K - $10K · 4 to 5 Yrs Exp',
    link: '#!',
  },
  {
    title: 'Wordpress Developer',
    text1: 'Mumbai, Full Time',
    text2: '$08K - $10K · 4 to 5 Yrs Exp',
    link: '#!',
  },
  {
    title: 'Jr. QA Tester',
    text1: 'California, USA . Full Time',
    text2: '$14K - $23K · No equity',
    link: '#!',
  },
  {
    title: 'Sr. UX Designer',
    text1: 'California, USA . Full Time',
    text2: '$14K - $23K · No equity',
    link: '#!',
  },
  {
    title: 'Social Media Manager',
    text1: 'Kolkata, India .  Fulltime',
    text2: '$5K - $6K ·  Fresher',
    link: '#!',
  },
  {
    title: 'Golang Developer',
    text1: 'Mumbai . Fultime',
    text2: '$08K - $10K · 4 to 5 Yrs Exp',
    link: '#!',
  },
];

const Careers = () => {
  return (
    <div className={styles.careers}>
      <div className="container">
        <div className={styles.careers__wrapper}>
          {careers.map((career) => {
            return (
              <div className={styles.career}>
                <h6 className={styles.career__title}>{career.title}</h6>
                <p className={styles.career__text1}>{career.text1}</p>
                <p className={styles.career__text2}>{career.text2}</p>
                <div className="link">
                  <a href={career.link}>Apply Now</a>
                  <img src={iconPrev} alt="Icon prev" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Careers;
