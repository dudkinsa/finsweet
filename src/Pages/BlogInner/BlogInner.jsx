import React from 'react';
import styles from './blogInner.module.scss';
import shape from './img/shape.svg';
import decor from './img/decor.svg';
import decorLine from './img/decor-line.svg';
import avatarJonson from './avatars/Andrew_Jonson.svg';

const BlogInner = () => {
  return (
    <div className={styles.blogInner}>
      <div className="container">
        <div className={styles.blogInner__wrapper}>
          <img className={styles.blogInner__decor} src={decor} alt="decor" />
          <div className={styles.blogInner__left}>
            <img className={styles.blogInner__shape} src={shape} alt="decor" />
            <h2 className={styles.blogInner__title}>
              Breaking the code How did we build our Figma plugin
            </h2>
            <p className={styles.blogInner__text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the greatest
              satisfaction for our clients
            </p>
            <div className={styles.person}>
              <a className={styles.linkBloger} href="#!">
                <img
                  className={styles.person__avatar}
                  src={avatarJonson}
                  alt="avatar"
                />
                <p className={styles.person__name}>Andrew Jonson</p>
              </a>
              <img src={decorLine} alt="decor" />
              <p className={styles.person__text}>Posted on 27th January 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInner;
