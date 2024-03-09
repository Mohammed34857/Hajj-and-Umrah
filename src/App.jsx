import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import { Header,Footer } from './assets/sections'
import { Home , UmrahPrograms} from './assets/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
         <Header/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Programs/:id' element={<UmrahPrograms/> }/>               
             </Routes>
          <Footer/>
       </Router> 
    </>
  )
}

export default App
