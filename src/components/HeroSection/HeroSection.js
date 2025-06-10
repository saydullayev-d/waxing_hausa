import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Header/Header.js";
import "./HeroSection.css"
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    gsap.to("#container", {
      backgroundPosition: "center 10%",
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="container"
      className="hero-section relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
    // style={{ backgroundImage: "url('../../static/images/bg1.jpg')" }}  
    >
      <Element name="main">


        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 sm:px-6 h-full">

          <h1 className="hero-text text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-relaxed sm:leading-relaxed md:leading-relaxed mt-16 sm:mt-20 md:mt-24">
            Добро пожаловать в *waxing Hausa - место, где ваше здоровье и благополучие становятся нашим главным приоритетом.
          </h1>
        </div>
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4 rounded-full backdrop-blur-lg bg-white/10 px-4 py-4">
        <a href="https://n814803.alteg.io/company/765426/personal/menu?fbclid=PAZXh0bgNhZW0CMTEAAaaVeK8sKv279oyb24_0Yq_OnBGouIjrxDZgdIyDNMBit2kOIQG3-O4SoqU_aem_sMS38GfzFLccmmy6e0FB-w&o=" target="_blank" rel="noopener noreferrer">
        <button
          className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-xl md:text-2xl hover:bg-gray-200 transition-colors duration-300 shadow-lg"
        >
          Записаться
        </button>
        </a>
        <a href="https://wa.me/37455829082" target="_blank" rel="noopener noreferrer">
        <button
          className="bg-pastel-green text-white px-8 py-4 rounded-full font-semibold text-xl md:text-2xl hover:bg-gray-200 hover:text- gray-900 transition-colors duration-300 shadow-lg"
        >
          WhatsApp
        </button>
        </a>
      </div>
      </Element>
    </section>
  );
};

export default HeroSection;
