// src/components/Hero.js
import React from 'react';

function HeroSection() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-8 tracking-tight">
        ВАШЕ УЮТНОЕ<br />
        МЕСТО ДЛЯ<br />
        ПРЕОБРАЖЕНИЯ
      </h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-sm md:text-base font-semibold hover:bg-orange-600 transition duration-300">
          Записаться
        </button>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm md:text-base font-semibold hover:bg-gray-800 transition duration-300">
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default HeroSection;