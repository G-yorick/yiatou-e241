import Slider from "react-slick";

const SliderModel = ({children,...options}) => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 4,
        slidesToScroll: 1,
      };
    return (
        <Slider arrows={false} {...options} {...settings}>
            {children}
        </Slider>
    );
}

export default SliderModel;
