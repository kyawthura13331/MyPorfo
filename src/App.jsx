import { useState } from 'react'
import './index.css'
import Home from './Page/home'
import Content from './Page/content'
import MyProjects from './Page/projectpage'
import About from './Page/about'
import Nav from './component/Navbar'
import { useRef } from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import VariableProximity from './Ref/VariableProximity'
function App() {
  
 const containerRef = useRef(null);
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/projects" element={<MyProjects/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      
   </>
  )
}

export default App
