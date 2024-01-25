

import './App.css'
import About from './components/about';
import Contact from './components/contact';
import Products from './components/products';
import Navbar from './components/navbar';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowProduct from './components/showProduct';


function App() {


  return (
    <>
    
    <Router>
    <Navbar />
<Routes>
<Route path="/" element={<Products />} />
    <Route path="/product/:id" element={<ShowProduct />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />      
      </Routes>
      </Router>
    </>
  )
}

export default App
