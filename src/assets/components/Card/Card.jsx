import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

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
                   <Link className='details' to={`/Programs/${props.id}`}> تفاصيل </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card