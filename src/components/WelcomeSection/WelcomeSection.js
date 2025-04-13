import React from "react";
import WelcomeImg from "../../static/images/welcome_img.jpg"

const WelcomeSection = () =>{
    return(
        <section className="text-black relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-4 sm:px-6 h-full">

        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-relaxed sm:leading-relaxed md:leading-relaxed mt-14 sm:mt-16 md:mt-20">
            Добро пожаловать в наш мир красоты и гармонии!
          </h1>
        </div>

        <div className="md:mt-0 md:w-1/2 flex justify-end"></div>
        <div className="w-full h-[80%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img 
                src={WelcomeImg}
                alt="Welcome img"
                className="w-full h-full object-cover rounded-lg shadow-md"            
            ></img>
        </div>
        </div>
        </section>
    );
}

export default WelcomeSection;