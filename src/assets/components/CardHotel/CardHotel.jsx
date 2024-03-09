import React from 'react'
import './CardHotel.css'
import { FaStar } from "react-icons/fa";



const CardHotel =(props) => {

const starsArray = Array.from({ length: props.StartNumber }, (_, index) => <FaStar key={index} style={{ color: 'gold' }} />);


  return (
    <div className='CardHotel'>
        <img className='hotel-image' src={props.image} />
                         <div className='hotel-information'>
                             <h1>فندق {props.HotelName} </h1>
                             <p>الموقع {props.location}</p>
                            <div className='star'> {starsArray}</div>
                            <a href=""> تفاصيل </a>
                         </div>
    </div>
  )
}

export default CardHotel