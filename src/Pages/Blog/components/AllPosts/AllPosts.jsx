import React from 'react';
import styles from './allPosts.module.scss';
import avatarJonson from './avatars/Andrew_Jonson.svg';
import imagePost1 from './img/image1.jpg';
import imagePost2 from './img/image2.jpg';
import imagePost3 from './img/image3.jpg';
import imagePost4 from './img/image4.jpg';
import imagePost5 from './img/image5.jpg';
import imagePost6 from './img/image6.jpg';

const posts = [
  {
    image: <img src={imagePost1} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        We aim to attain the greatest satisfaction for our clients
      </a>
    ),
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost2} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        We aim to attain the greatest satisfaction for our clients
      </a>
    ),
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost3} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        We aim to attain the greatest satisfaction for our clients
      </a>
    ),
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost4} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        We aim to attain the greatest satisfaction for our clients
      </a>
    ),
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost5} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        We aim to attain the greatest satisfaction for our clients
      </a>
    ),
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    linkPerson: '#!',
  },
  {
    image: <img src={imagePost6} alt="avatar" />,
    avatar: <img src={avatarJonson} alt="avatar" />,
    name: 'Andrew Jonson',
    date: 'Jan 19, 2021',
    linkPost: (
      <a href="#!">
        We aim to attain the greatest satisfaction for our clients
      </a>
    ),
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    linkPerson: '#!',
  },
];

const AllPosts = () => {
  return (
    <div className={styles.allPosts}>
      <div className="container">
        <div className={styles.allPosts__wrapper}>
          <h2 className={styles.allPosts__title}>All posts</h2>
          <div className={styles.allPosts__bottom}>
            {posts.map((post) => {
              return (
                <div className={styles.post}>
                  <div className={styles.post__image}>{post.image}</div>
                  <div className={styles.postLeft}>
                    <h4 className={styles.post__title}>{post.linkPost}</h4>
                    <p className={styles.post__text}>{post.text}</p>
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

export default AllPosts;
