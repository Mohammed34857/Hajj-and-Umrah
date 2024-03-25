import React from 'react'
import './CardUmrahProgram.css'
import { Link } from 'react-router-dom'

const CardUmrahProgram=(props) =>{
  return (
    <div className='umrah-programs-item'>
        <div className='card-umrah-program'>
          <h1>{props.ProgramName}</h1>
            <div className='c'> 
                 <img className='umrah-programs-image' src={props.image} />
                 <div className='umrah-programs-content'>
                   <div>
                     <p>{props.Duration}</p>
                     <p>{props.DurationInMakaa}</p>
                     <p>{props.DurationInMedina}</p>
                   </div>
                   <Link className='details' to={`/Programs/${props.id}`} onClick={() => window.scrollTo(0, 0)}> تفاصيل  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardUmrahProgram