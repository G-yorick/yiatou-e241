import React from 'react';
import { FaQuoteRight } from 'react-icons/fa6';
import TestimonialSlider from '../Sliders/TestimonialSlider';

const Testimonial = () => {
    return (
        <div className='py-5 px-3 flex flex-col gap-4 bg-white'>
            <h2 className='flex items-center gap-3 text-xl font-bold text-gray-500'>Témoignages clients <FaQuoteRight size={40}/></h2>
            <TestimonialSlider/>
        </div>
    );
}

export default Testimonial;
