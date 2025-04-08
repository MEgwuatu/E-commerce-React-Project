import React from 'react'
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Hero from './Pages/Hero'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    
      
{/* Routing */}
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/> 
  <Route path="/product" element={<Product />}/> 
  <Route path="/contact" element={<Contact />}/> 




</Routes>
  

      </div>
  )
}

export default App;
