import './Hotel.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import ImageHotel from '../../images/hotel-entrance.jpg'
import HotelDetailsPageData from '../../Data/HotelDetailsPageData'
import { IoHome } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { SliderHotel } from '../../components';

const Hotel = () => {
    const { id } = useParams();
    const hotel = HotelDetailsPageData.find((hotel) => hotel.id === parseInt(id));

    if (!hotel) {
        return <div>برنامج غير موجود</div>;
    }


    const starsArray = Array.from({ length: hotel.StarNumber }, (_, index) => <FaStar key={index} style={{ color: 'gold' }} />);

    return (
        <div className="hotel">
            <div className="frame-hotel">
                <div className='image-hotel'>
                    <img src={ImageHotel} alt="" />
                </div>
               <div className='information'><IoHome/> اسم الفندق: {hotel.HotelName} {starsArray} </div> 
               <div className='information'><GiPositionMarker/> الموقع : {hotel.Position} </div> 
              
              <SliderHotel hotel={hotel} />

            </div>
        </div>
    );
};

export default Hotel;
