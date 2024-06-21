import './Home.css'
import React from 'react'

import { Hotel, SectionMain, UmrahPrograms , HajjPrograms , About ,PlacesInMacca , PlacesInMadena} from '../../sections/index'

const Home = () => {
  return (
    <div >
    <SectionMain/>
    <UmrahPrograms/>
    <HajjPrograms/>
    <Hotel/>
    <PlacesInMacca/>
    <PlacesInMadena/>
    <About/>
    </div> 
  )
}

export default Home