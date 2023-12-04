import React from 'react';
import './sliderhome.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper/modules';

import { SwiperNavButtons } from './SwiperNavButtons';

import { ReactComponent as Leaf } from '../SliderHome/leaf-three.svg';

import Ana from '../SliderHome/ana-curcan.jpg'
import Annie from '../SliderHome/annie-sprat.jpg'
import Anni from '../SliderHome/annie-spratt-senz.jpg'
import Jonathan from '../SliderHome/jonathan-borba.jpg'
import Tara from '../SliderHome/tara-evans.jpg'


function SliderHome() {

    return (
        <>
        <div className='sliderhome__wrap'>
            <div className='sliderhome__subtitle'>твоя идеальная пара</div>
        <div className='sliderhome__title'>Купите образ</div>
        </div>
            <Swiper
                // navigation={true}
                modules={[Navigation,]}
                spaceBetween={50}
                slidesPerView={3}
                loop ={true}
                breakpoints={{
                    // 310: {
                    //     // when window width is >= 310px
                    //   slidesPerView: 1,
                    //   spaceBetween: 20,
                    // },
                    320: {
                        slidesPerView: 1,
                        // spaceBetween:0,
                      },
                      375: {
                        slidesPerView: 2,
                        spaceBetween:10,
                      },
                    768: {
                        slidesPerView: 3,
                        spaceBetween:10,
                      },
                    //  // when window width is >= 500px
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                     // when window width is >= 1200px
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}   
                >
                <SwiperNavButtons></SwiperNavButtons>
                <SwiperSlide><img src={Ana} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Annie} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Anni} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Jonathan} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Tara} alt="" /></SwiperSlide>
                
            </Swiper>
            <div className='sliderhome__container-svg'>
                <Leaf className='sliderhome__svg'></Leaf>
                </div>
                
        </>
    );
}


export default SliderHome;

