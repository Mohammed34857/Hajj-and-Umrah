import React, { useEffect, useState } from "react";
import './About.css'
import about from '../../images/about.jpg' 
import axios from 'axios';

const About =() =>{

const [office,setOffice]=useState([]);
console.log(office)
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://officealhajandalumrah.adaptable.app/office');
      setOffice(response.data);
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);


  return (
    <div className='about'>

        <div className="photo">
            <img src={about} />
            <div className="circel1"></div>
            <div className="circel2"></div>
            <div className="circel3"></div>
            <div className="circel4"></div>
            <div className="circel5"></div>
        </div>
        <div className="about-us">
            <h1 > من نحن:</h1>
            <div className="lin"></div>
            {office.length > 0 && office[0].aboutOffice
          ? <p>{office[0].aboutOffice}</p>
          : <p>Loading...</p>}
              </div>
    </div>
  )
}

export default About