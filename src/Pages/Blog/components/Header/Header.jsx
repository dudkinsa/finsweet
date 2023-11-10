import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import shape from './img/shape.svg';
import prev from './icons/icon-prev.svg';
import avatarJonson from './avatars/Andrew_Jonson.svg';
import avatarJasele from './avatars/Mathew_Jasele.svg';
import avatarAbakas from './avatars/Hussen_Abakas.svg';
import decorLine from './img/decor-line.svg';
import decor from './img/decor.svg'
import image from './img/image.jpg';

const posts = [
  {
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        Great design expectations prejudice in digital products in Next Year
      </a>
    ),
    linkPerson: "#!",
  },
  {
    avatar: <img src={avatarJasele} alt="avatar" />,
    name: 'Mathew Jasele',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        Great design expectations prejudice in digital products in Next Year
      </a>
    ),
    linkPerson: "#!",
  },
  {
    title:
      'Great design expectations prejudice in digital products in Next Year',
    avatar: <img src={avatarAbakas} alt="avatar" />,
    name: 'Hussen Abakas',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        Great design expectations prejudice in digital products in Next Year
      </a>
    ),
    linkPerson: "#!",
  },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <div className={styles.top}>
              <img className={styles.top__shape} src={shape} alt="decor" />
              <div className="caption">Trending</div>
              <h2 className={styles.top__title}>
                Breaking the code. How did we build our Figma plugin.
              </h2>
              <p className={styles.top__text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Maker is a decentralized. We aim to attain the.
              </p>
              <div className={`${styles.top__link} link`}>
                <Link to="/blog-inner">Read More </Link>
                <img src={prev} alt="icon" />
              </div>
              <div className={styles.person}>
                <img
                  className={styles.person__avatar}
                  src={avatarJonson}
                  alt="avatar"
                />
                <p className={styles.person__name}>Andrew Jonson</p>
                <img src={decorLine} alt="decor" />
                <p className={styles.person__text}>
                  Posted on 27th January 2021
                </p>
              </div>
              <img src={image} alt="" />
            </div>
          </div>
          <div className={styles.header__right}>
            <img className = {styles.decor}src={decor} alt="decor" />
            {posts.map((post) => {
              return (
                <div className={styles.post}>
                    <a href={post.linkPerson}>
                  <h4 className={styles.post__title}>{post.linkPost}</h4>
                  <div className={styles.personPost}>
                    <div className={styles.personPost__left}>{post.avatar}</div>
                    <div className={styles.personPost__right}>
                      <p className={styles.personPost__name}>{post.name}</p>
                      <p className={styles.personPost__date}>{post.date}</p>
                    </div>
                  </div>

                    </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
