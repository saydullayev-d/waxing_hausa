import React from "react";

const WelcomeSection = () =>{
    return(
        <section className="text-black relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center">
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4 sm:px-6 h-full">

        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-relaxed sm:leading-relaxed md:leading-relaxed mt-14 sm:mt-16 md:mt-20">
            Добро пожаловать в наш мир красоты и гармонии!
        </h1>

        </div>
        </section>
    );
}

export default WelcomeSection;