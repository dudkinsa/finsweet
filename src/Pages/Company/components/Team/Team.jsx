import React from 'react';
import styles from './team.module.scss';
import team1 from './img/team-1.jpg';
import team2 from './img/team-2.jpg';
import team3 from './img/team-3.jpg';
import team4 from './img/team-4.jpg';
import team5 from './img/team-5.jpg';
import team6 from './img/team-6.jpg';
import team7 from './img/team-7.jpg';
import team8 from './img/team-8.jpg';
import twitter from './icon/twitter.svg';
import instagram from './icon/instagram.svg';
import linkedIn from './icon/linkedIn.svg';

const members = [
  {
    name: 'Igor Egorov',
    photo: team1,
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
  {
    name: 'Serg Reut',
    photo: team2,
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
  {
    name: 'Mike Zahonda',
    photo: team3,
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
  {
    name: 'Robert  McDonald',
    photo: team4,
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
  {
    name: 'Michael Low',
    photo: team5,
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
  {
    name: 'David Williams',
    photo: team6,
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
  {
    name: 'Charles Boom',
    photo: team7,
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
  {
    name: 'Nicola Johnson',
    photo: team8,
    profession: 'React devloper',
    profession: 'React devloper',
    linkTwitter: <img src={twitter} alt="twitter" />,
    linkInstagram: <img src={instagram} alt="instagram" />,
    linkLinkedIn: <img src={linkedIn} alt="linkedIn" />,
  },
];

const Team = () => {
  return (
    <div className={styles.team}>
      <div className="container">
        <div className={styles.team__wrapper}>
          <div className={styles.team__top}>
          <div className="caption">MEET OUR TEAM</div>
          <h2 className={styles.team__title}>
            Teamwork is the only way we work
          </h2>
          <p className={styles.team__text}>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
          </div>
          <div className={styles.team__bottom}>
            {members.map((member) => {
              return (
                <div className={styles.member}>
                
                    <img className={styles.member__photo} src={member.photo} alt="photo" />
                  
                  <div className={styles.member__textInfo}>
                    <h4 className={styles.member__title}>{member.name}</h4>
                    <p className={styles.member__text}>{member.profession}</p>
                    <div className={styles.member__social}>
                      <a href="#!">{member.linkTwitter}</a>
                      <a href="#!">{member.linkInstagram}</a>
                      <a href="#!">{member.linkLinkedIn}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
