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
        <Slider arrows={false} {...settings}>
          {sliders.map((img,i) =>{
            return (
              <div key={i} className='w-full h-[150px] p-2 flex justify-center items-center'>
                <img src={img} alt={`slider-${i}`} className='w-full h-full rounded object-cover'/>
              </div>
            );
          })}
        </Slider>
      );
    }

export default HomeSlider;

  