import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ListCardProduct from '../listCardProduct';
import { useAuth } from '../../hooks/use-auth';

export default function HighlightProductSwiper() {
  const { isAllProduct } = useAuth()
  return (
    <div className='w-[900px] pl-1'>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        className=''
      > {isAllProduct.map(el =>
        <SwiperSlide className='w-[300px]'>
          <ListCardProduct key={el.id} Pitem={el} />
        </SwiperSlide >)}

      </Swiper>
    </div>
  );
}

