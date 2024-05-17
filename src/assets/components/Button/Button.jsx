import './Button.css'
import { Link } from 'react-router-dom';
import React from 'react'

const Button= (props)=> {
  return (
    <div>
        <Link to={`${props.link}`} className='button'> {props.linkName} </Link>
    </div>
  )
}

export default Button
