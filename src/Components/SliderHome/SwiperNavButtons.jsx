import React from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as Arrow } from '../Assets/Images/arrow.svg';

export const SwiperNavButtons = () => {

    const swiper = useSwiper();

    return (
        <div className="swiper__wrap-btn">
            <button onClick={() => swiper.slidePrev()}><Arrow className="swiper__arrow-prev"></Arrow></button>
            <button onClick={() => swiper.slideNext()}><Arrow className="swiper__arrow-next"></Arrow></button>
        </div>
    );
};





