import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [color] = useState("#a54fcc")
  document.body.style.background = color
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  
  )
}

export default App
