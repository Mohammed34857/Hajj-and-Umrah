import React from 'react'
import './HotelInUmrahProgram.css'
import {Button} from '../../components';


const HotelInUmrahProgram = ({hotels}) => {
  return (
    <div className='HotelInUmrahProgram'>
        <div className='HotelContent'>
          {hotels.map((hotel, index) => (
           <div className='hotelImg' id={`hotel-${index}`} key={index} style={{backgroundImage:`url(${hotel.urlImagehotel})`}}>
             <div className='content'>
              <h2>{hotel.name}</h2>
              <p>{hotel.location}</p>
              <div className='btnHotelDetails'>
                <Button link={`/Hotel/${hotel._id}`} linkName={'تفاصيل الفندق'} onClick={() => window.scrollTo(0, 0)} />
              </div>
             </div>
           </div>
          ))} 
        </div> 
          
    </div>
  )
}

export default HotelInUmrahProgram