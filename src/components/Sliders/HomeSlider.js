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
    };
    return (
        <Slider arrows={false} {...settings} className="w-full mt-10">
          {sliders.map((img, i) => {
            return (
              <div key={i} className='w-full h-[150px] flex justify-center items-center mt-2'>
                <img src={img} alt={`slider-${i}`} className='w-full h-full object-cover'/>
              </div>
            );
          })}
        </Slider>
    );
}

export default HomeSlider;
