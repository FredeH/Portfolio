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
      <Route path="/">
        <Hero />
        <WebAR />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/cv">
        <CV />
      </Route>

      <Route path="/portfolio">
        <Portfolio />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
     </Routes>
    </>
  );
}

export default App;
