import React from 'react';
import Slider from "react-slick";

const SliderModel = ({children, dots, onSlideChange}) => {
    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {
            if (onSlideChange) {
                onSlideChange(current);
            }
        },
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
}

export default SliderModel;
