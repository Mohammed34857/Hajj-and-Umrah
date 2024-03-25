import React , { useState } from 'react'
import './Hotel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardHotel } from '../../components'; 
import HotelData from '../../Data/HotelData'


const Hotel = () => {

    const [backgroundImage, setBackgroundImage] = useState(HotelData[0].image);

      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          beforeChange: ( current , index ) => {
            setBackgroundImage(HotelData[index].image );
           }
         }

         
    
  return (
    <div id='hotel' className='Hotel' style={{ backgroundImage: `url(${backgroundImage})` }}>
     <div className='hotel-slider'>
        <Slider {...settings}>
          {HotelData.map((card) => (
           <div key={card.id}>
            <CardHotel
              id={card.id}
              image={card.image}
              HotelName={card.HotelName}
              location={card.location}
              StartNumber={card.StartNumber}
             />
          </div>
          ))}
        </Slider>
     </div>
       
    </div>
  )
}

export default Hotel