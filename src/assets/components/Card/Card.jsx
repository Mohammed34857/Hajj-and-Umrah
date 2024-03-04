import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='umrah-programs-item'>
        <div className='Card'>
          <h1>{props.ProgramName}</h1>
            <div className='c'> 
                 <img className='umrah-programs-image' src={props.image} />
                 <div className='umrah-programs-content'>
                   <div>
                     <p>{props.Duration}</p>
                     <p>{props.DurationInMakaa}</p>
                     <p>{props.DurationInMedina}</p>
                   </div>
                    <a href=""> Details </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card