import './Home.css'
import React from 'react'

import { Hotel, SectionMain, UmrahPrograms } from '../../sections/index'

const Home = () => {
  return (
    <div >
    <SectionMain/>
    <UmrahPrograms/>
    <Hotel/>
    </div> 
  )
}

export default Home