import React from 'react'
import './About.css'
import about from '../../images/about.jpg' 

const About =() =>{
  return (
    <div className='about'>
          <div className="about-us">
            <h1>about-us</h1>
            <div className="lin"></div>
            <p>The basis on which our services are based is customer satisfaction, <br />
                and from here we strive to provide the best offers <br />
                with the best services for individuals and groups <br />
                and all our trips are selected in advance by <br />
                our distinguished team with care and precision - and in the end, <br />
                before offering any trip, the CEO of the company himself makes sure <br />
                Of all services and making sure everything is up to the standard of excellence.</p>
        </div>
        <div className="photo">
            <img src={about} />
            <div className="circel1"></div>
            <div className="circel2"></div>
            <div className="circel3"></div>
            <div className="circel4"></div>
            <div className="circel5"></div>
        </div>
    </div>
  )
}

export default About