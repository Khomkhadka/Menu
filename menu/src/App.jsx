import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Jokes from './Jokes'


const App = () => {
 
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/jokes" element={<Jokes/>}/>
</Routes>
</BrowserRouter>
  
 </>
)
  
}

export default App



