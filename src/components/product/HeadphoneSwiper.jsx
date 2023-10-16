import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination} from 'swiper/modules';

export default function HeadphoneSwiper() {
  return (
    <div className='w-[1000px]'>
      <Swiper 
        slidesPerView={4}
        spaceBetween={0}
        className=''
      >
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='p-2 h-[300px] ' >
          <div className='bg-white border-2  border-grey-500  hover:border-sky-600/50 h-full rounded-2xl'>
            <div>

            </div>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
}

