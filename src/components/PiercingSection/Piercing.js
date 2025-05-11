import React from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';

const Piercing = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      <PricingHeader />
      {/* Вводная секция */}
      <section className="w-full bg-gradient-to-b from-gray-200 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Пирсинг
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный пирсинг с использованием безопасных материалов и техник для стильного самовыражения.
          </p>
        </div>
      </section>

      {/* Секция услуг (заглушка) */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Цены и виды пирсинга уточняйте у наших специалистов.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Piercing;