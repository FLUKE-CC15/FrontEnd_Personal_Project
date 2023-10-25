import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CardProduct from '../cardProduct';

export default function HighlightProductSwiper() {
  return (
    <div className='w-[900px]'>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        className=''
      >
        <SwiperSlide className=' mx-1 rounded-2xl bg-cyan-300 w-[300px] h-[300px]'>
          {/* <CardProduct /> */}
        </SwiperSlide >
        <SwiperSlide className=' mx-1 rounded-2xl bg-cyan-300 w-[300px] h-[300px]'>
          {/* <CardProduct /> */}
        </SwiperSlide >
        <SwiperSlide className=' mx-1 rounded-2xl bg-cyan-300 w-[300px] h-[300px]'>
          {/* <CardProduct /> */}
        </SwiperSlide >
        <SwiperSlide className=' mx-1 rounded-2xl bg-cyan-300 w-[300px] h-[300px]'>
          {/* <CardProduct /> */}
        </SwiperSlide >
        <SwiperSlide className=' mx-1 rounded-2xl bg-cyan-300 w-[300px] h-[300px]'>
          {/* <CardProduct /> */}
        </SwiperSlide >
        <SwiperSlide className=' mx-1 rounded-2xl bg-cyan-300 w-[300px] h-[300px]'>
          {/* <CardProduct /> */}
        </SwiperSlide >
      </Swiper>
    </div>
  );
}

