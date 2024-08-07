import React from 'react';
import Slider from "react-slick";

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
          <div className='w-full h-[200px] p-2 flex justify-center items-center'>
            <div className='w-full h-full bg-orange-400 rounded'></div>
          </div>
          <div className='w-full h-[200px] p-2 flex justify-center items-center'>
            <div className='w-full h-full bg-purple-500 rounded'></div>
          </div>
          <div className='w-full h-[200px] p-2 flex justify-center items-center'>
            <div className='w-full h-full bg-green-700 rounded'></div>
          </div>
          <div className='w-full h-[200px] p-2 flex justify-center items-center'>
            <div className='w-full h-full bg-yellow-600 rounded'></div>
          </div>
        </Slider>
      );
    }

export default HomeSlider;

  