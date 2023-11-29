import React from 'react';
import './review.scss';
import uuid from 'react-uuid';
import shape from './img/shape.svg';

import quote from './img/quote.svg';
import decorVertical from './img/decor-vertical.svg';
import customer1 from './img/avatar-1.jpg';
import customer2 from './img/avatar-2.jpg';
import customer3 from './img/avatar-3.jpg';
import logo from './icons/logo.svg';
import SliderReview from './Slider/SliderReview';

function id() {
  return uuid();
}

const customers = [
  {
    id: id(),
    avatar: customer1,
    name: 'Johnny Andro',
    job: 'Director Company',
    logo: logo,
    review:
      'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
  },
  {
    id: id(),
    avatar: customer2,
    name: 'Johnny Andro',
    job: 'Testing Engineer',
    logo: logo,
    review:
      'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
  },
  {
    id: id(),
    avatar: customer3,
    name: 'Johnny Andro',
    job: 'Testing Engineer',
    logo: logo,
    review:
      'Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!',
  },
];
const Review = () => {
  return (
    <div className="review">
      <div className="container">
        <div className="review__wrapper">
          <div className="review__left">
            <img src={shape} alt="decor" />
            <h2>Our customers love what we do</h2>
            <p className="review__paragraph-big">
              Transform your idea into reality with finsweet
            </p>
            <p className="review__paragraph-small">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{' '}
            </p>
            <div className="members">
              <div className="members__customer">
                {customers.map((customer) => {
                  return (
                    <img
                      key={customer.id}
                      src={customer.avatar}
                      alt={customer.name}
                    />
                  );
                })}
              </div>
              <p className="members__info">30+ Customer Reviews</p>
            </div>
          </div>


          <div className="review__testimonial">
            <img className ="review__quote" src={quote} alt="quote" />
          <img className ="review__decor" src={decorVertical} alt="decor" />
            <SliderReview customers={customers} />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
