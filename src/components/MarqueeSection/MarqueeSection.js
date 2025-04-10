import React from "react";
import "./MarqueeSection.css";

const MarqueeSection = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-4 overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          <span>
            Специальное предложение: скидка 20% на первую процедуру! Запишитесь сегодня и получите бонус! &nbsp;
          </span>
          <span>
            Специальное предложение: скидка 20% на первую процедуру! Запишитесь сегодня и получите бонус! &nbsp;
          </span>
          <span>
            Специальное предложение: скидка 20% на первую процедуру! Запишитесь сегодня и получите бонус! &nbsp;
          </span>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;