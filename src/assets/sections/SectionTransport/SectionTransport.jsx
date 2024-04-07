import React from 'react'
import './SectionTransport.css'
import {  IoChatbubbles  } from "react-icons/io5";
import { GiPositionMarker , GiStairsGoal } from "react-icons/gi";
import { FaInternetExplorer  , FaBus , FaUsb , FaClipboard   } from "react-icons/fa";
import { MdOutlineSecurity  } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { SliderHotel } from '../../components';

function Transport(props) {
  return (
    <div>
         <div className='information'><FaBus /> اسم شركة النقل : {props.transport.companyName}  </div> <br />
         <div className='information'><GiStairsGoal /> اهداف الشركة : {props.transport.goals} </div> <br />
         <div className='information'><GiPositionMarker/> الموقع : {props.transport.Position} </div> <br />
        
        <SliderHotel hotel={props.transport} />

      <section>
         <div className="servise">
             <h1>الخدمات المتوفرة لدينا</h1>
             <div className="lines">
                   <div className="line"></div>
                   <div className="circle"> </div>
                   <div className="line"></div>
             </div> 
             <div className="servises">
                <p> {props.transport.services[0]} :  USB وصلة <FaUsb /></p>
                <p> {props.transport.services[1]} : عام <FaClipboard /></p>
                <p> {props.transport.services[2]} :  انترنت  <FaInternetExplorer /></p>
                <p> {props.transport.services[3]} : مكيفات   <TbAirConditioning/></p>
                <p> {props.transport.services[4]} : لغات التحدث  <IoChatbubbles/>
                    <ul>
                      <li>العربية</li><br />
                     <li>الإنجليزية</li>
                    </ul>
                </p>
                <p> {props.transport.services[5]} : الامن والحماية  <MdOutlineSecurity/></p>
               </div>
               
         </div>
      </section>
    </div>
  )
}

export default Transport