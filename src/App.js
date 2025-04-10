// src/App.js
import React from 'react';
import Navbar from './components/Header/Header.js';
import HeroSection from './components/HeroSection/HeroSection.js';

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;