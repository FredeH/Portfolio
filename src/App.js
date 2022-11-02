import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import WebAR from "./components/WebAR";
import Hero from "./components/Hero";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";

function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/Portfolio/" element={<><Hero/><WebAR/></>} />
      <Route path="/Portfolio/projects" element={<Projects/>} />
      <Route path="/Portfolio/cv" element={<CV/>} />
      <Route path="/Portfolio/portfolio" element={<Portfolio/>} />
      <Route path="/Portfolio/contact" element={<Contact/>} />
     </Routes>
    </>
  );
}

export default App;
