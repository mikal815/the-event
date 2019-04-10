import React from 'react';
import Slider from "react-slick";


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }


    return (
        <div
            className="carousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    image 1
                </div>
                <div>
                    image 2
                </div>
                <div>
                    image 3
                </div>

            </Slider>
        </div>
    );
};

export default Carousel;