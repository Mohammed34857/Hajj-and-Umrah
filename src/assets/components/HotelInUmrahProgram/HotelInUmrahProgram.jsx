import React from 'react'
import './HotelInUmrahProgram.css'

const HotelInUmrahProgram = ({hotels}) => {
  return (
    <div className='HotelInUmrahProgram'>
        <div className='HotelContent'>
          {hotels.map((hotel, index) => (
           <div className='col' id={`hotel-${index}`} key={index} style={{backgroundImage:`url(${hotel.urlImagehotel})`}}>
             <div className='content'>
              <h2>{hotel.name}</h2>
              <p>{hotel.location}</p>
             </div>
           </div>
          ))} 
        </div> 
          

 
         {/* <div className='colum1'>
         <div className='col' id='col1' style={{ backgroundImage: `url(${props.image1})` }}>
               <div className='content'>
                 <h1>{props.HotelName1}</h1>
                 <p>{props.location1}</p>
              </div>
          </div>
          <div className='col'  style={{ backgroundImage: `url(${props.image2})` }}>
              <div className='content'>
                 <h1>{props.HotelName2}</h1>
                 <p>{props.location2}</p>
              </div>
            </div>
         </div>
          <div className='colum2'>
              <div className='col' style={{ backgroundImage: `url(${props.image3})` }}>
                 <div className='content'>
                   <h1>{props.HotelName3}</h1>
                   <p>{props.location3}</p>
                 </div>
               </div>
              <div className='col' style={{ backgroundImage: `url(${props.image4})` }}>
                 <div className='content'>
                   <h1>{props.HotelName4}</h1>
                   <p>{props.location4}</p>
                 </div>
              </div>
          </div> */}
    </div>
  )
}

export default HotelInUmrahProgram