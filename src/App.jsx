import { useState } from 'react'
import './App.css'

import { Header,Footer } from './assets/sections'
import { Home } from './assets/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Home/>
   <Footer/>
    </>
  )
}

export default App
