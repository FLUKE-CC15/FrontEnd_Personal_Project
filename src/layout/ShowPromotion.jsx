import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useAuth } from '../hooks/use-auth';
import pic1 from "../images/pic/1.webp"
import pic2 from "../images/pic/2.webp"
import pic3 from "../images/pic/3.webp"
import pic4 from "../images/pic/4.webp"
import pic5 from "../images/pic/5.webp"
import pic6 from "../images/pic/6.webp"
import pic7 from "../images/pic/7.webp"
import pic8 from "../images/pic/7.webp"
import pic9 from "../images/pic/7.webp"
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
                        <img src={pic1} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic2} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic3} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic4} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic5} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic6} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic7} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic8} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[800px] h-[400px] p-3  overflow-hidden  ' >
                    <div className=' bg-sky-100 border-4 border-sky-200 h-full overflow-hidden rounded-xl'>
                        <img src={pic9} className='w-full h-full object-fill' />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default ShowPromotion;