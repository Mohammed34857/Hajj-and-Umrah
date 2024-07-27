import './Home.css'
import React from 'react'

import { Hotel, SectionMain, UmrahPrograms , HajjPrograms , About ,PlacesInMacca , PlacesInMadena} from '../../sections/index'

const Home = () => {
  return (
    <div >
    <SectionMain/>
    <UmrahPrograms/>
    <HajjPrograms/>
    <PlacesInMacca/>
    <PlacesInMadena/>
    <Hotel/>
    <About/>
    </div> 
  )
}

export default Home