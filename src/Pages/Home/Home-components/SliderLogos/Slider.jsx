import React from 'react';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './slider.scss';



const Slider = ({ logos }) => {
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination]}
        spaceBetween={11}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {logos.map((logo) => {
          return (
            <SwiperSlide key={logo.id}>
              <img className='slider__img' src={logo.image} alt={logo.title} />
            </SwiperSlide>
          );
        })}
            <div className="swiper__controler none"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
