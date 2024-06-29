//import React from 'react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Hero from './Hero';
import HeroOne from './HeroOne';

const Slider = () => {

      
    return (
        <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
          <Hero></Hero>
          </SwiperSlide>
          <SwiperSlide>
          <HeroOne></HeroOne>
          </SwiperSlide>
    
        </Swiper>
      </>
    );
};

export default Slider;