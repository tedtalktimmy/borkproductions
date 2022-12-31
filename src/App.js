import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Photography from './components/Photography';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Photography />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
