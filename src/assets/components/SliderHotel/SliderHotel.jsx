import React, { useState } from 'react';
import './SliderHotel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderHotel=(props) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '0px',
        adaptiveHeight: true,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const getDimensions = (index) => {
        const centerIndex = currentSlide % props.hotel.photos.length;
        const distanceFromCenter = Math.abs(index - centerIndex);

        switch (distanceFromCenter) {
            case 0: 
                return { width: '400px', height: '400px' , zIndex: 3  };
            case 1: 
                return { width: '300px', height: '300px' , zIndex: 2 , margin: '-50px'  };
            case 2: 
                return { width: '200px', height: '200px' , zIndex: 1 };
        }
    };

  return (
    <div className="slider">
    <Slider {...settings}>
        {props.hotel.photos.map((photo, index) => (
            <div key={index}>
                <div className="slider-image-wrapper">
                    <div
                        className="slider-image"
                        style={{
                            backgroundImage: `url(${photo})`,
                            ...getDimensions(index),
                        }}
                    ></div>
                </div>
            </div>
        ))}
    </Slider>
  </div>
  )
}

export default SliderHotel