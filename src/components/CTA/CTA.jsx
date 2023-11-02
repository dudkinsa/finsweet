import React from 'react';
import './cta.scss';
import decor from './img/shape.svg';
import decorVertical from './img/decor-vertical.svg';

const CTA = ({paddingTop}) => {
  return (
    <div className="cta" style={paddingTop}>
      <div className="container">
        <div className="cta__wrapper">
       




     <div className="cta__inner">
          <img className='cta__decor' src={decor} alt="decor" />
            <div className="cta__left">
              <div className="caption ">NEWSLETTER</div>
              <h3 className="cta__title">
                Subscribe our News Letter to get Latest Updates.
              </h3>
            </div>
            <div className="cta__right">
              <input className ="input" type="text" placeholder="Paresh@Pixeto.com" />
              <button> <span className='btn-text'>Subscribe</span> </button>
            </div>
          </div>
          <img className='cta__decor-vertical' src={decorVertical} alt="decor" /> 


        </div>
      </div>
    </div>
  );
};

export default CTA;
