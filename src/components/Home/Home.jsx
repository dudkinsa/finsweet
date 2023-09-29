import React from 'react';
import './home.scss';
import image from '../../assets/img/Home/Header/image.jpg';
import decor from '../../assets/img/Home/Header/Shapes.png';
import prev from '../../assets/icon/icon-prev.svg'
import decorBtn from '../../assets/img/Shapes-btn.svg'


import logo1 from '../../assets/img/Home/Header/Logo-1.svg';
import logo2 from '../../assets/img/Home/Header/Logo-2.svg';
import logo3 from '../../assets/img/Home/Header/Logo-3.svg';
import logo4 from '../../assets/img/Home/Header/Logo-4.svg';
import logo5 from '../../assets/img/Home/Header/Logo-5.svg';




const Home = () => {
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
              <p className='text__info'>
                The entire Finsweet team knows what's good with Webflow and you
                can too with 1 week and a good attitude.
              </p>
              <button className='text__button'>
                <img className='text__button--decor' src={decorBtn} alt="decor button" />
                <span>Request Quote </span> 
                <img className='text__button-icon'src={prev} alt="prev" /> 
               </button>
            </div>

            <div className="image">
              <img className="image__left" src={decor} alt="Decor left" />
              <img className='image-centr' src={image} alt="Image" />
              <img className="image__right" src={decor} alt="Decor right" />
            </div>
          </div>

          <div className="logos">
            <div className="logos__title-wrapper">
              <p className="logos__paragrapg-small">Our Clients</p>
              <p className="logos__paragrapg-large">We've Worked with</p>
            </div>
            <img className="logos__logo" src={logo1} alt="logo" />
            <img className="logos__logo" src={logo2} alt="logo" />
            <img className="logos__logo" src={logo3} alt="logo" />
            <img className="logos__logo" src={logo4} alt="logo" />
            <img className="logos__logo" src={logo5} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
