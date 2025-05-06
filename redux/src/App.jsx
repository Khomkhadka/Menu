import React from 'react'
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import About from './About.jsx'
import Product from './Product.jsx'
import Navbar from './component/Navbar.jsx'
import {useSelector,useDispatch} from 'react-redux'


const App=() =>{
  return (
    <>
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/about' element={<About/>}/> 
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
