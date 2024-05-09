import React from 'react'
import './SectionTransport.css'
import { GiPositionMarker , GiStairsGoal } from "react-icons/gi";
import { FaBus } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { SliderHotel } from '../../components';

function Transport(props) {
  return (
    <div>
         <div className='information'><FaBus /> اسم شركة النقل : {props.companyName}  </div> <br />
         <div className='information'><GiStairsGoal /> اهداف الشركة : {props.goals} </div> <br />
         <div className='information'><GiPositionMarker/> نوع الباص : {props.typeBus} </div> <br />
        
        <SliderHotel hotel={props.ImageSlider} />

      <section>
         <div className="service">

             <h1>الخدمات المتوفرة لدينا</h1>
             <div className="lines">
                   <div className="line"></div>
                   <div className="circle"> </div>
                   <div className="line"></div>
             </div> 
            <div className="services">
             { props.Services.map((service , index) =>(
             <div  key={index}>
                <p><TbAirConditioning/> {service} </p>
               </div>
               ))} 
            </div>
            
         </div>
      </section>
    </div>
  )
}

export default Transport