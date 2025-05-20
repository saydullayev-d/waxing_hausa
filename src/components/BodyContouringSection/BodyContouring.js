import React, { useState } from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';

const BodyContouring = () => {
  const [activeTab, setActiveTab] = useState('Массаж');

  const services = {
    Массаж: [
    ],
    Обертывание: [
    ],
    Indiba: [
    ],
  };

  const tabs = ['Массаж', 'Обертывание', 'Indiba'];

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      <PricingHeader />
      {/* Вводная секция */}
      <section className="w-full bg-gradient-to-b from-gray-200 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Коррекция фигуры
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Процедуры для моделирования фигуры: массаж, обертывания и технологии Indiba для вашего идеального силуэта.
          </p>
        </div>
      </section>

      {/* Секция услуг с вкладками */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
            Наши услуги
          </h2>

          {/* Вкладки */}
          <div className="flex justify-center space-x-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium text-lg transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-pastel-green text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Содержимое вкладок */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services[activeTab].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {service.name}
                </h3>
                <div className="space-y-2">
                  {Object.entries(service.packages).map(([pkg, price]) => (
                    <div
                      key={pkg}
                      className="flex justify-between text-gray-600 text-lg"
                    >
                      <span>{pkg}</span>
                      <span className="font-semibold">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodyContouring;