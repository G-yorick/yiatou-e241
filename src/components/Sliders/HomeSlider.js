// HomeSlider.js

import React from 'react';
import Slider from "react-slick";
import { sliders } from '../../utils/utils'; 

const HomeSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider arrows={false} {...settings} className="w-full h-auto">
            {sliders.map((img, i) => (
                <div key={i} className='w-full h-auto flex justify-center items-center mt-32'>
                    <img src={img} alt={`slider-${i}`} className='w-full h-32 object-cover'/>
                </div>
            ))}
        </Slider>
    );
}

export default HomeSlider;
