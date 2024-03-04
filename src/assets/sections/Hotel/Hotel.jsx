import React , { useState } from 'react'
import './Hotel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hotel1 from '../../images/Hotels/anwar_alasel.jpg'
import hotel2 from '../../images/Hotels/emaar_grand.jpg'
import hotel3 from '../../images/Hotels/loloat_alrayyan.jpg'
import hotel4 from '../../images/Hotels/orjuan_rous.jpg'
import hotel5 from '../../images/Hotels/roas_almasi.jpg'
import hotel6 from '../../images/Hotels/violet.jpg'

const Hotel = () => {

    const [backgroundImage, setBackgroundImage] = useState(hotel1);

    const images = [
        hotel1,
        hotel2,
        hotel3,
        hotel4,
        hotel5,
        hotel6
      ];

      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          beforeChange: (current, next) => {
            setBackgroundImage(images[next]);
          }
         }

  return (
    <div className='Hotel' style={{ backgroundImage: `url(${backgroundImage})` }}>
     <div className='hotel-slider'>
              <Slider {...settings}>
         {images.map((image, index) => (
           <div key={index}>
             <img className='hotel-image' src={image} alt={`Slide ${index + 1}`} />
           </div>
      ))}
    </Slider>
     </div>
       
    </div>
  )
}

export default Hotel