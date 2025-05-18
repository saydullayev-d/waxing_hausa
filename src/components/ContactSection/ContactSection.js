import React from 'react';
import { FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen text-black font-sans">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Город Ереван, <br /> Корюн 21  
      </h1>
      <p className="text-xl md:text-3xl mb-4">10:00 – 20:00</p>
      <p className="text-lg md:text-2xl mb-8 text-center">
        Без выходных <br /> и перерывов
      </p>
      <div className="flex space-x-4">
        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
          <FaPhone className="text-xl" />
        </button>
        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
          <FaInstagram className="text-xl" />
        </button>
        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
          <FaWhatsapp className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ContactSection;