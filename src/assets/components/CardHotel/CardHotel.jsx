import React from 'react'
import './CardHotel.css'
import { FaStar } from "react-icons/fa";
import { Button } from '../../components';

const CardHotel =(props) => {

const starsArray = Array.from({ length: props.Number_stars }, (_, index) => <FaStar key={index} style={{ color: 'gold' }} />);


  return (
    <div className='CardHotel'>
          <img className='hotel-image' src={props.image} />
              <div className='hotel-information'>
                  <h1>فندق  {props.HotelName} </h1>
                  <p>الموقع {props.location}</p>
                  <div className='star'> {starsArray}</div>
                  <Button link={`/Hotel/${props.id}`} linkName={'تفاصيل الفندق'} onClick={() => window.scrollTo(0, 0)} />
              </div>
    </div>
  )
}

export default CardHotel