import React, { useState, useEffect } from 'react';
import './Hotel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardHotel } from '../../components';
import axios from 'axios';

const Hotel = () => {
    
    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://officealhajandalumrah.adaptable.app/Hotel');
                setHotelData(response.data);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                setLoading(false); 
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!loading && hotelData.length > 0) {
            setBackgroundImage(hotelData[0].urlImagehotel);
        }
    }, [loading, hotelData]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        beforeChange: (current, index) => {
            setBackgroundImage(hotelData[index].urlImagehotel);
        }
    };

    return (
        <div id='hotel' className='Hotel' style={{ backgroundImage: `url(${backgroundImage})` }}>
            {!loading && (
                <div className='hotel-slider'>
                    <Slider {...settings}>
                        {hotelData.map((card) => (
                            <div key={card._id}>
                                <CardHotel
                                    id={card._id}
                                    image={card.urlImagehotel}
                                    HotelName={card.name}
                                    location={card.location}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};

export default Hotel;
