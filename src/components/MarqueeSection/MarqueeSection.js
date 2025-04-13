import React from "react";
import "./MarqueeSection.css";

const MarqueeSection = () => {
  // Определяем текст, который будет повторяться
  const marqueeText = "СКИДКИ НА ПЕРВОЕ ПОСЕЩЕНИЕ";

  return (
    <section className="w-full bg-pastel-green text-white py-4 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {/* Повторяем текст несколько раз для плавного цикла */}
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>

        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;