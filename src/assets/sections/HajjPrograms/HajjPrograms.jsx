import React from 'react'
import './HajjPrograms.css'
import { CardHajj } from '../../components'

const HajjPrograms = () => {

   

  return (
    <>
    <div id='HajjPrograms'>
      <h1>  برامج الحج : </h1>
    </div>
    <div className='hajj-programs'> 
      <CardHajj />
      <CardHajj />
      <CardHajj />
      <CardHajj />
      <CardHajj />
      <CardHajj />
    </div>
    </>
  )
}

export default HajjPrograms