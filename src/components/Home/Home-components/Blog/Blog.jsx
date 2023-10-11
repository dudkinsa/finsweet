import React from 'react';
import './blog.scss';

import shape from './img/shape.svg';
import iconPrev from './icons/icon-prev.svg';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog__wrapper">
          <img className="blog__decor" src={shape} alt="decor" />
          <h2 className="blog__title">Read our latest blogs & news</h2>
          <div className="blogs">
            <div className="blog">
              <img className="blog__image" src={image1} alt="" />
              <div className="blog__info-text">
                <p>Jan 19, 2021</p>
                <h4>Today’s best design trends for digital products</h4>
                <div className="link">
                  <a href="#!">Read about us</a>
                  <img src={iconPrev} alt="Icon prev" />
                </div>
              </div>
            </div>
            <div className="blog">
              <img className="blog__image" src={image2} alt="" />
              <div className="blog__info-text">
                <p>Jan 19, 2021</p>
                <h4>A practical guide to building a brand strategy</h4>
                <div className="link">
                  <a href="#!">Read about us</a>
                  <img src={iconPrev} alt="Icon prev" />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
