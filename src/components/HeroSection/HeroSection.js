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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      </Element>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 sm:px-6 h-full">

        <h1 className="hero-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight sm:leading-snug md:leading-snug mt-16 sm:mt-20 md:mt-24">
          К нам приходят за Энергией, Красотой и Здоровьем
        </h1>
      </div>
      
    </section>
  );
};

export default HeroSection;
