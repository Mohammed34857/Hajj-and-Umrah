import React from 'react'
import './BusInUmrahProgram.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from '../../components';

const HotelInBusInUmrahProgram= ({busCompany})=> {


  console.log(busCompany);
  return (
    <div className='bus-in-umrah-program'>
      <div className='busCompany-img'>
         <h1>{busCompany.name_company}</h1>
      </div>
      <div className='busCompany-content'>
        <p>{busCompany.goals_company}</p>
        <div className='type-bus'>
          <p> <span> {busCompany.type_bus} </span> : نوع الباص  <br />
          <br />
          سعر التذكرة : <span> {busCompany.price_tecket} </span>  
          </p>
          <ul> 
          الخدمات :
          {busCompany.Services?.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
         </div>
         <div className='btn-transport-details'>
            <Button link={`/Transport`} linkName={'تفاصيل شركة النقل'}  />
         </div>
      </div>
    </div>
  )
}

export default HotelInBusInUmrahProgram