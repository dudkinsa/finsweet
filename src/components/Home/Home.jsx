import React from 'react';
import uuid from 'react-uuid';
import './home.scss';
import image from '../../assets/img/Home/Header/image.png';
import decor from '../../assets/img/Home/Header/Shapes.svg';
import prev from '../../assets/icon/icon-prev.svg';
import decorBtn from '../../assets/img/Shapes-btn.svg';

import logo1 from '../../assets/img/Home/Header/Logo-1.svg';
import logo2 from '../../assets/img/Home/Header/Logo-2.svg';
import logo3 from '../../assets/img/Home/Header/Logo-3.svg';
import logo4 from '../../assets/img/Home/Header/Logo-4.svg';
import logo5 from '../../assets/img/Home/Header/Logo-5.svg';
import Slider from './SliderLogos/Slider';

function id() {
  return uuid();
}

const Home = () => {
  const logos = [
    {
      id: id(),
      image: logo1,
      title: 'Имя логотипа',
    },
    {
      id: id(),
      image: logo2,
      title: 'Имя логотипа',
    },
    {
      id: id(),
      image: logo3,
      title: 'Имя логотипа',
    },
    {
      id: id(),
      image: logo4,
      title: 'Имя логотипа',
    },
    {
      id: id(),
      image: logo5,
      title: 'Имя логотипа',
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__inner">
            <div className="text">
              <div className="text__decor">
                <div></div>
              </div>
              <h1 className="text__title">
                Transform Your Idea Into Reality with Finsweet
              </h1>
              <p className="text__info">
                The entire Finsweet team knows what's good with Webflow and you
                can too with 1 week and a good attitude.
              </p>
              <button className="text__button">
                <img
                  className="text__button--decor"
                  src={decorBtn}
                  alt="decor button"
                />
                <span>Request Quote </span>
                <img className="text__button-icon" src={prev} alt="prev" />
              </button>
            </div>

            <div className="image">
              <img className="image__left" src={decor} alt="Decor left" />
              <img className="image-centr" src={image} alt="Image" />
              <div className="image__right"></div>
            </div>
          </div>

          <div className="logos">
            <div className="logos__title-wrapper">
              <p className="logos__paragrapg-small">Our Clients</p>
              <p className="logos__paragrapg-large">We've Worked with</p>
            </div>

            {logos.map((logo) => {
              return (
                <img
                  key={logo.id}
                  className="logos__logo"
                  src={logo.image}
                  alt={logo.title}
                />
              );
            })}

          </div>
            <Slider logos={logos} />
         
        </div>
      </div>
    </div>
  );
};

export default Home;
