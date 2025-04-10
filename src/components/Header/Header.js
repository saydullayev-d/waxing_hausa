// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 md:p-8 lg:p-12 bg-black bg-opacity-50 text-white">
      <div className="text-xl md:text-2xl font-bold lowercase">атмосфера</div>
      <ul className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
        <li className="cursor-pointer">Услуги</li>
        <li className="cursor-pointer">Комплексы</li>
        <li className="cursor-pointer">Сертификаты</li>
        <li className="cursor-pointer">Команда</li>
        <li className="cursor-pointer">Отзывы</li>
        <li className="cursor-pointer">Контакты</li>
      </ul>
      <div className="text-sm md:text-base">+7 (918) 114-77-89</div>
    </nav>
  );
}

export default Navbar;