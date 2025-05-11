import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Header.js';
import HeroSection from './components/HeroSection/HeroSection.js';
import MarqueeSection from './components/MarqueeSection/MarqueeSection.js';
import WelcomeSection from './components/WelcomeSection/WelcomeSection.js';
import SplitSection from './components/SplitSection/SplitSection.js';
import ServicesSection from './components/ServicesSection/ServicesSection.js';
import TeamSection from './components/ProfileSection/ProfileSection.js';
import EstheticCosmetology from './components/EstheticCosmetologySection/EstheticCosmetology.js';
import HardwareCosmetology from './components/HardwareCosmetologySection/HardwareCosmetology.js';
import LaserEpilation from './components/LaserEpilationSection/LaserEpilation.js';
import SugaringWaxing from './components/SugaringWaxingSection/SugaringWaxing.js';
import Piercing from './components/PiercingSection/Piercing.js';
import BodyContouring from './components/BodyContouringSection/BodyContouring.js';
import ReviewsSection from './components/ReviewsSection/Reviews.js';

// Главная страница со всеми секциями (без Navbar)
const HomePage = () => (
  <div className="relative min-h-screen bg-cover bg-center flex flex-col">
    <Navbar />
    <HeroSection />
    <MarqueeSection />
    <WelcomeSection />
    <SplitSection />
    <ServicesSection />
    <TeamSection />
    <ReviewsSection />
  </div>
);

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/esthetic-cosmetology" element={<EstheticCosmetology />} />
        <Route path="/hardware-cosmetology" element={<HardwareCosmetology />} />
        <Route path="/laser-epilation" element={<LaserEpilation />} />
        <Route path="/piercing" element={<Piercing />} />
        <Route path="/sugaring-waxing" element={<SugaringWaxing />} />
        <Route path="/body-contouring" element={<BodyContouring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;