import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CardProduct from '../cardProduct';

export default function HeadphoneSwiper() {
  return (
    <div className='w-[900px]'>
      <Swiper 
        slidesPerView={4}
        spaceBetween={0}
        className=''
      >
        <SwiperSlide className='flex justify-center'>
          <CardProduct/>
        </SwiperSlide >
        <SwiperSlide className='flex justify-center'>
          <CardProduct/>
        </SwiperSlide >
        <SwiperSlide className='flex justify-center'>
          <CardProduct/>
        </SwiperSlide >
        <SwiperSlide className='flex justify-center'>
          <CardProduct/>
        </SwiperSlide >
        <SwiperSlide className='flex justify-center'>
          <CardProduct/>
        </SwiperSlide >
        <SwiperSlide className='flex justify-center'>
          <CardProduct/>
        </SwiperSlide >
        
        
      </Swiper>
    </div>
  );
}

