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
                <div key={i} className='w-full h-64 flex justify-center items-center mt-40 bg-gray-200 transition ease-in-out duration-500 hover:scale-110'>
                    <img src={img} alt={`slider-${i}`} className='w-full h-110s object-cover'/>
                </div>
            ))}
        </Slider>
    );
}

export default HomeSlider;
