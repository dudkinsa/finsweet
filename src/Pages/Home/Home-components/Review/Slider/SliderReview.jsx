import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './sliderReview.scss';
const SliderReview = ({ customers }) => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {customers.map((customer) => {
          return (
            <SwiperSlide key={customer.id}>
              <div className="slide">
                <h4>{customer.review}</h4>
                <div className="slide__bottom">
                  <div className="slide__left">
                    <img src={customer.avatar} alt="avatar" />
                    <div>
                      <h6>{customer.name}</h6>
                      <p>{customer.job}</p>
                    </div>
                  </div>
                  <div className="slide__right">
                    <img src={customer.logo} alt="logo" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderReview;
