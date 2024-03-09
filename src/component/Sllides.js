import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';

import "swiper/css";
import "swiper/css/effect-cards";
import Img1 from '../images/c1.jpg';
import Img2 from '../images/c2.jpg';

const images = [Img1 , Img2];
  
export default function Slideshow() {
    return (
      <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide><img src={Img1} width={320} /></SwiperSlide>
          <SwiperSlide><img src={Img2}  width={320}/></SwiperSlide>     
        
        </Swiper>
      </>
    );
  }

