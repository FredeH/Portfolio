import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import WebAR from "./components/WebAR";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import VRDK from "./components/projects/VRDK";
import CAF from "./components/projects/CAF";

function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<><Hero/><WebAR/></>}/>
      <Route path="/projects" element={<Projects/>} />
      <Route path="/projects/vrdk" element={<VRDK/>} />
      <Route path="/projects/gm" element={<Projects/>} />
      <Route path="/projects/caf" element={<CAF/>} />
      <Route path="/projects/makerlab" element={<Projects/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
     </Routes>
    </>
  );
}

export default App;
