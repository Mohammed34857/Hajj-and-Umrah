import React from 'react'
import './HotelBusInUmrahProgram.css'

const HotelBusInUmrahProgram = (props) => {
  return (
    <div className='HotelBusInUmrahProgram'>
         <div className='col' style={{ backgroundImage: `url(${props.image1})` }}>
               <div className='content'>
                 <h1>{props.HotelName1}</h1>
                 <p>{props.location1}</p>
              </div>
          </div>
          <div className='col' id='col2' style={{ backgroundImage: `url(${props.image2})` }}>
              <div className='content'>
                 <h1>{props.HotelName2}</h1>
                 <p>{props.location2}</p>
              </div>
            </div>
          <div id='col3'>
              <div className='col' style={{ backgroundImage: `url(${props.image3})` }}>
                 <div className='content'>
                   <h1>{props.HotelName3}</h1>
                   <p>{props.location3}</p>
                 </div>
               </div>
              <div className='col' style={{ backgroundImage: `url(${props.image4})` }}>
                 <div className='content'>
                   <h1>{props.HotelName1}</h1>
                   <p>{props.location1}</p>
                 </div>
              </div>
          </div>
    </div>
  )
}

export default HotelBusInUmrahProgram