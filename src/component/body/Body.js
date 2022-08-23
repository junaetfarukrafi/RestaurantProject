import React from 'react'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Demo from './Demo'
import { Routes, Route, Link } from "react-router-dom";
// import { Card } from 'reactstrap'

const Body = () => {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo/>} />
       
      </Routes>
    </div>
  )
}

export default Body