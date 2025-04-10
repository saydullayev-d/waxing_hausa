// src/App.js
import React from 'react';
import Navbar from './components/Header/Header.js';
import HeroSection from './components/HeroSection/HeroSection.js';
import MarqueeSection from './components/MarqueeSection/MarqueeSection.js';
import WelcomeSection from './components/WelcomeSection/WelcomeSection.js';

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
    >
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <WelcomeSection />
    </div>
  );
}

export default App;