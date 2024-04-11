import './Transport.css';
import React  from 'react';
import TransportData from '../../Data/TransportData'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SectionTransport } from '../../sections';

const Transport=() => {

  const transport = TransportData.find((transport) => transport.id === parseInt("1"));

 
    return (
      <div className="transport">
      <div className="frame-transport">
      <div className='img-filter'><h1>Bus</h1><h2>Home <MdKeyboardDoubleArrowRight/> Bus </h2></div>
          <div className='image-transport'>
              <img src={transport.photos[5]} alt="" />
          </div>
           {TransportData.map((transport) => (
                <div className='information-transport' key={transport.id}>
                    <SectionTransport transport={transport} />   
                </div>
            ))}
      </div>
  </div>
  )
}
export default Transport