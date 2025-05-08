import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Header.js';
import HeroSection from './components/HeroSection/HeroSection.js';
import MarqueeSection from './components/MarqueeSection/MarqueeSection.js';
import WelcomeSection from './components/WelcomeSection/WelcomeSection.js';
import SplitSection from './components/SplitSection/SplitSection.js';
import ServicesSection from './components/ServicesSection/ServicesSection.js';
import TeamSection from './components/ProfileSection/ProfileSection.js';

// Компоненты страниц для маршрутов из SplitSection
const EstheticCosmetology = () => <h1>Эстетическая косметология</h1>;
const HardwareCosmetology = () => <h1>Аппаратная косметология</h1>;
const LaserEpilation = () => <h1>Лазерная эпиляция</h1>;
const Piercing = () => <h1>Пирсинг</h1>;
const SugaringWaxing = () => <h1>Шугаринг и восковая депиляция</h1>;
const BodyContouring = () => <h1>Коррекция фигуры</h1>;

// Главная страница со всеми секциями
const HomePage = () => (
  <div className="relative min-h-screen bg-cover bg-center flex flex-col">
    <Navbar />
    <HeroSection />
    <MarqueeSection />
    <WelcomeSection />
    <SplitSection />
    <ServicesSection />
    <TeamSection />
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