import React from 'react'
import './CardHotel.css'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const CardHotel =(props) => {

const starsArray = Array.from({ length: props.Number_stars }, (_, index) => <FaStar key={index} style={{ color: 'gold' }} />);


  return (
    <div className='CardHotel'>
          <img className='hotel-image' src={props.image} />
              <div className='hotel-information'>
                  <h1>فندق  {props.HotelName} </h1>
                  <p>الموقع {props.location}</p>
                  <div className='star'> {starsArray}</div>
                  <Link to={`./Hotel/${props.id}`} onClick={() => window.scrollTo(0, 0)}> تفاصيل </Link>
              </div>
    </div>
  )
}

export default CardHotel