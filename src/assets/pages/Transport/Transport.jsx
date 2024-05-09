import './Transport.css';
import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ImSpinner } from "react-icons/im";
import { SectionTransport } from '../../sections';
import axios from 'axios';

const Transport=() => {

  const [trans, setTrans] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://officealhajandalumrah.adaptable.app/BusCompany/allBusCompany');
            setTrans(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Bus data:', error);
            setLoading(false);
        }
    };
    fetchData();
    }, []);

    if (loading) {
        return <div className='loading'> Loading... <span><ImSpinner /></span>  </div>;
    }
  
 
    return (
      <div className="transport">
      <div className="frame-transport">
      <div className='img-filter'><h1>Bus</h1><h2>Home <MdKeyboardDoubleArrowRight/> Bus </h2></div>
          <div className='image-transport'>
          {trans?.[0] && <img src={trans[0].urlImageCompany} alt="" />}
          </div>
            {trans?.map((transport) => (
                <div className='information-transport' key={transport._id}>
                    <SectionTransport companyName={transport.name_company}  goals={transport.goals_company} typeBus={transport.type_bus}  ImageSlider={transport.urlImage} Services={transport.Services} />   
                </div>
            ))}
      </div>
  </div>
 )
} 
export default Transport