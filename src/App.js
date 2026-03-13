import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Services from './Pages/services/services';
import Projects from './Pages/Project/projects';
import Contact from './Pages/Contact/contact';

function App() {
  return (
    <>
      <Navbar 
        navlinks={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Projects", path: "/projects" },
            { label: "Contact", path: "/contact" },
        ]}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;