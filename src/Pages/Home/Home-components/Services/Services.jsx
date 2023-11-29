import React from 'react';
import './services.scss';

import headphone from './icons/headphones.svg';
import setting from './icons/setting.svg';
import webDev from './icons/web-dev.svg';
import iconPrev from './icons/icon-prev.svg';
import Button from '../../../../components/Button/Button';



const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="services__top">
            <div className="caption">Our Services</div>
            <h2>
              We build software solutions that solve client's business
              challenges
            </h2>
          
            <Button text ='Start a Project' />
          </div>
          <div className="services__bottom">
          <div className="service">
              <img src={headphone} alt="headphone" />
              <h6>Technical support</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <div className="link">
                <a href="#!">Read about us</a>
                <img className='image-prev' src={iconPrev} alt="Icon prev" />
              </div>
            </div>
            <div className="service">
              <img src={setting} alt="setting" />
              <h6>Testing Management</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <div className="link">
                <a href="#!">Read about us</a>
                <img  className='image-prev'src={iconPrev} alt="Icon prev" />
              </div>
            </div>
            <div className="service">
              <img src={webDev} alt="web Dev" />
              <h6>Development</h6>
              <p>
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <div className="link">
                <a href="#!">Read about us</a>
                <img className='image-prev' src={iconPrev} alt="Icon prev" />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
