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
                     <p> {props.Duration} يوم </p>
                     <p> {props.DurationInMakaa} ليالي في مكة </p>
                     <p> {props.DurationInMedina} ليالي في المدينة </p>
                   </div>
                   <Link className='details' to={`/UmrahPrograms/${props.id}`} onClick={() => window.scrollTo(0, 0)}> تفاصيل  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardUmrahProgram