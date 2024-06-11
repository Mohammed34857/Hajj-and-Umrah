import React from 'react'
import './BusInUmrahProgram.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const HotelInBusInUmrahProgram= ({busCompany})=> {
  return (
    <div className='bus-in-umrah-program'>
      <div className='busCompany-img'>
         <h1>{busCompany.name_company}</h1>
      </div>
    </div>
  )
}

export default HotelInBusInUmrahProgram