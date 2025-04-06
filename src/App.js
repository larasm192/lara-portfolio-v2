import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import './pages/styles.css';

function App() {
  return (
      <Router>
        <div className='full-page'>
          <Navbar />
            <div className='main-content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
