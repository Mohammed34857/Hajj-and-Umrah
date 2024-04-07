import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import './App.css'

import { Header , Footer } from './assets/sections'
import { Home , UmrahPrograms , Hotel, Transport , RegisterProgramUmrah , RegisterProgramHajj , RegisterProgramSpecial } from './assets/pages'

function App() {

  return (
    <>
      <Router>
         <Header/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Programs/:id' element={<UmrahPrograms/> }/>   
                <Route path='Hotel/:id' element={<Hotel/>} />     
                <Route path='Transport/' element={<Transport/>}/>      
                <Route path='RegisterProgramUmrah/' element={<RegisterProgramUmrah/>}/>  
                <Route path='RegisterProgramHajj/' element={<RegisterProgramHajj/>}/>
                <Route path='RegisterProgramSpecial/' element={<RegisterProgramSpecial/>}/>              
             </Routes>
           <Footer/>  
       </Router> 
    </>
  )
}

export default App
