// src/App.js
import React from 'react';
import Navbar from './components/NavBar/NavBar.js';
import HeroSection from './components/HeroSection/HeroSection.js';

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('IMG_0256.JPG')", // Замените на путь к вашему изображению
      }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;