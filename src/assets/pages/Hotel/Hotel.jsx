import React, { useState, useEffect } from 'react';
import './Hotel.css'
import { useParams, Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { FaStar,FaCar } from "react-icons/fa";
import { MdOutlineSettingsSuggest, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ImSpinner } from "react-icons/im";
import { SliderHotel } from '../../components';
import axios from 'axios';

const Hotel = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeLink, setActiveLink] = useState('around1');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://officealhajandalumrah.adaptable.app/Hotel');
                setHotel(response.data.find(hotel => hotel._id === (id)));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    }

    if (loading) {
        return <div className='loading'> Loading... <ImSpinner /></div>;
    }

    if (!hotel) {
        return <div>الفندق غير موجود</div>;
    }

    const starsArray = Array.from({ length: hotel.Number_stars }, (_, index) => <FaStar key={index} style={{ color: 'gold' }} />);

    let content = null;
    if (activeLink === 'around1') {
        content = (
            <div className='around'>
                <ul>
                    <li>متحف دار المدينة للتراث الحضاري والعمراني 8كم</li>
                    <li>حديقة القاضي  8 كم</li>
                </ul>
            </div>
        );
    } else if (activeLink === 'around2') {
        content = (
            <div className='around'>
                <ul>
                  {hotel.Services.map((service, index) => (
                      <li key={index}>{service}</li>
                  ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="hotel">
            <div className="frame-hotel">
                <div className='image-hotel'>
                <div className='img-filter'><h1>Hotel</h1><h2>Home <MdKeyboardDoubleArrowRight /> Hotel </h2></div>
                    <img src={hotel.urlImagehotel} alt="" />
                </div>
                <br />
                <div className='information'><IoHome /> اسم الفندق: {hotel.name} {starsArray} </div> <br />
                <div className='information'><GiPositionMarker /> الموقع : {hotel.location} </div> <br />
                <div className='information'> {hotel.details} </div>

                <SliderHotel hotel={hotel.urlImage} />

                <section>
                    <div className="service">
                        <h1>الخدمات المتوفرة لدينا</h1>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="circle"> </div>
                            <div className="line"></div>
                        </div>
                        <div className="services">
                            {hotel.Services.map((service , index) => (
                                  <p key={index}>{service} <MdOutlineSettingsSuggest/></p>
                             ))}
                        </div>
                        <div className="round">
                            <div className='butt'>
                                <ul>
                                    <li><Link className={activeLink === 'around1' ? 'around1 active' : 'around1'} to="#" onClick={() => handleLinkClick('around1')}> <ImSpinner /> المعالم السياحية</Link></li>
                                    <li><Link className={activeLink === 'around2' ? 'around2 active' : 'around2'} to="#" onClick={() => handleLinkClick('around2')}> <FaCar /> مايوجد في الجوار </Link></li>
                                </ul>
                            </div>

                            {content}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Hotel;


   


