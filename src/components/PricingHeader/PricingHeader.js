import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../static/images/logo.png"

const PricingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 right-0 z-10 p-4 transition-colors duration-300 bg-pastel-green shadow-lg"
        }`}
    >
      <div className="flex items-center mx-auto px-4">
        {/* Logo (left) */}
        <a href="/" className="items-center space-x-2">
          <img alt="logo" src={logo} className="h-20 w-auto object-cover"/>
        </a>

        {/* Navigation (center) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10">
          <Link
            to="main"
            smooth={true}
            duration={500}
            className="relative group text-white text-lg font-semibold cursor-pointer"
          >
            Услуги

          </Link>
          <Link
            to="aboutUs"
            smooth={true}
            duration={500}
            className="relative group text-white text-lg font-semibold cursor-pointer"
          >
            Комплексы

          </Link>
          <Link
            to="ourSalons"
            smooth={true}
            duration={500}
            className="relative group text-white text-lg font-semibold cursor-pointer"
          >
            Сертификат

          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="relative group text-white text-lg font-semibold cursor-pointer"
          >
            Команда

          </Link>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="relative group text-white text-lg font-semibold cursor-pointer"
          >
            Отзывы

          </Link>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="relative group text-white text-lg font-semibold cursor-pointer"
          >
            Контакты
          </Link>
        </nav>

        {/* Phone number (right, desktop only) */}
        <div className="hidden md:flex items-center text-black text-lg font-semibold rounded-full py-2 px-4 bg-white">
          <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
            +1 (234) 567-890
          </a>
        </div>

        {/* Burger menu (mobile, right) */}
        <button className="md:hidden text-white text-3xl ml-auto" onClick={toggleMenu}>
          <FaBars />
        </button>

        {/* Slide-out mobile menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-gray-800 text-white transform transition-transform duration-300 z-40 shadow-xl ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ height: "100vh" }}
        >
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleMenu}>
            <FaTimes />
          </button>

          <nav className="flex flex-col mt-20 space-y-6 px-6 text-xl">
            <Link to="main" smooth={true} duration={500} className="block" onClick={toggleMenu}>
              Главная
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="aboutUs" smooth={true} duration={500} className="block" onClick={toggleMenu}>
              О нас
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="ourSalons" smooth={true} duration={500} className="block" onClick={toggleMenu}>
              Наши салоны
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="services" smooth={true} duration={500} className="block" onClick={toggleMenu}>
              Услуги
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="contacts" smooth={true} duration={500} className="block" onClick={toggleMenu}>
              Контакты
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {/* Phone number in mobile menu */}
            <a href="tel:+1234567890" className="block mt-4" onClick={toggleMenu}>
              +1 (234) 567-890
            </a>
          </nav>
        </div>

        {/* Background overlay when menu is open */}
        {isOpen && <div className="fixed inset-0 bg-black/50 z-35" onClick={toggleMenu}></div>}
      </div>
    </header>
  );
};

export default PricingHeader;