import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useAuth } from '../hooks/use-auth';

function ShowPromotion() {
    const { getProduct } = useAuth();
    useEffect(() => { getProduct() }, [])
    return (
        <div className='w-[99.1vw] h-[300px] ' >
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}

                coverflowEffect={{
                    rotate: 0,
                    stretch: 50,
                    depth: 200,
                    modifier: 2,
                    slideShadows: false
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className=''
            >
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src='https://source.unsplash.com/random' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ShowPromotion;