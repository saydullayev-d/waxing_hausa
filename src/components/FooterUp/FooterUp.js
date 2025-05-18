import React from 'react';
import logo from "../../static/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-pastel-green text-white py-8 flex justify-center items-center">
      <div className="w-96 h-96">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </div>
    </footer>
  );
};

export default Footer;