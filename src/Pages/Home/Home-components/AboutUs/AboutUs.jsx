import React from 'react';
import './aboutUs.scss';

import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import decorVertical from './img/decor.svg';
import decorHorizontal from './img/decor-horizontal.svg';
import iconPrev from './icons/icon-prev.svg';
const AboutUs = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about-top">
            <div className="caption">About us</div>
            <div className="about-top__inner">
              <h2 className="about-top__left">
                The company leads entire webdesign process from concept to
                delivery.
              </h2>
              <div className="about-top__right">
                <h3>The Era Of Technology.</h3>
                <p>
                  Through True Rich Attended does no end it his mother since
                  real had half every him case in packages enquire we up
                  ecstatic unsatiable saw his giving Remain expense you position
                  concluded.
                </p>
              </div>
            </div>
          </div>
          <div className="about-bottom">
            <div className="about-bottom__images">
              <img src={image1} alt="Image" />
              <img src={image2} alt="Image" />
              <img src={image3} alt="Image" />
              <img src={decorVertical} alt="Decor" />
            </div>
            <div className="about-bottom__numbers">
              <div className="about-bottom__inner">
                <div className="box-left">
                  <div className="number">
                    <h3>1560+</h3>
                    <img src={decorHorizontal} alt="Decor" />
                    <p>Project Delivered</p>
                  </div>
                  <div className="number">
                    <h3>100+</h3>
                    <img src={decorHorizontal} alt="Decor" />
                    <p>Professional</p>
                  </div>
                  <div className="number">
                    <h3>950+</h3>
                    <img src={decorHorizontal} alt="Decor" />
                    <p>Happy Client</p>
                  </div>
                  <div className="number">
                    <h3>10 yrs</h3>
                    <img src={decorHorizontal} alt="Decor" />
                    <p>Experience</p>
                  </div>
                </div>

                <div className="box-right link">
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

export default AboutUs;
