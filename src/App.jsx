import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header , Footer } from './assets/sections'
import { Home , UmrahPrograms , HajjPrograms , Hotel, Transport , RegisterProgramUmrah , RegisterProgramHajj , RegisterProgramSpecial , DashBoardEmployee , DashBoardManager , LogInDashBoard} from './assets/pages'

function App() {

  return (
    <>
      <Router>
         <Header/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/UmrahPrograms/:id' element={<UmrahPrograms/> }/> 
                <Route path='HajjPrograms/:id' element={<HajjPrograms />} />
                <Route path='Hotel/:id' element={<Hotel/>} />     
                <Route path='Transport/' element={<Transport/>}/>      
                <Route path='RegisterProgramUmrah/:id' element={<RegisterProgramUmrah/>}/>  
                <Route path='RegisterProgramHajj/' element={<RegisterProgramHajj/>}/>
                <Route path='RegisterProgramSpecial/' element={<RegisterProgramSpecial/>}/>        
                <Route path='DashBoardEmployee/' element={<DashBoardEmployee/>}/>   
                <Route path='DashBoardManager/' element={<DashBoardManager/>}/>   
                <Route path='LogInDashBoard/' element={<LogInDashBoard/>}/>       
             </Routes>
           <Footer/>  
       </Router> 
    </>
  )
}

export default App
