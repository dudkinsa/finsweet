import React from 'react';
import styles from './recent.module.scss';
import avatarJonson from './avatars/Andrew_Jonson.svg';
import imagePost1 from './img/image1.jpg';
import imagePost2 from './img/image2.jpg';
import imagePost3 from './img/image3.jpg';
import imagePost4 from './img/image4.jpg';

const posts = [
  {
    image: <img src={imagePost1} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: <a href="#!">Today’s best design trends for digital products</a>,
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost2} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: <a href="#!">Today’s best design trends for digital products</a>,
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost3} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: <a href="#!">Today’s best design trends for digital products</a>,
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost4} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: <a href="#!">Today’s best design trends for digital products</a>,
    linkPerson: '#!',
  },
];
const Recent = () => {
  return (
    <div className={styles.recent}>
      <div className="container">
        <div className={styles.recent__wrapper}>
          <h2 className={styles.recent__title}>Read Recent Post</h2>
          <div className={styles.recent__bottom}>
            {posts.map((post) => {
              return (
                <div className={styles.post}>
                  {post.image}
                  <div className={styles.postLeft}>
                    <h4 className={styles.post__title}>{post.linkPost}</h4>
                    <a className={styles.person} src={post.linkPerson}>
                      <div className={styles.personPost}>
                        <div className={styles.personPost__left}>
                          {post.avatar}
                        </div>
                        <div className={styles.personPost__right}>
                          <p className={styles.personPost__name}>{post.name}</p>
                          <p className={styles.personPost__date}>{post.date}</p>
                        </div>
                      </div>
                    </a>
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

export default Recent;
