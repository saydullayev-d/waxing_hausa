import React, { useState } from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';

const HardwareCosmetology = () => {
  const [activeTab, setActiveTab] = useState('INDIBA');

  const services = {
    'INDIBA': [
      { name: 'Лицо INDIBA', price: '8000 драм' },
      { name: 'Шея INDIBA', price: '6000 драм' },
      { name: 'Лицо + шея INDIBA', price: '10000 драм' },
      { name: 'Волосистая часть головы INDIBA', price: '10000 драм' },
      { name: 'Плечи и руки INDIBA', price: '12000 драм' },
      { name: 'Ягодицы и бедра INDIBA', price: '12000 драм' },
      { name: 'Живот и талия INDIBA', price: '12000 драм' },
      { name: 'Ноги полностью INDIBA', price: '12000 драм' },
    ],
    'HIFU/SMAS': [
      { name: 'HIFU/SMAS лифтинг лица', price: '80000 драм' },
    ],
    'Гидропилинг': [
      { name: 'Гидропилинг (HydraFacial)', price: 'Цена по запросу' },
    ],
  };

  const tabs = ['INDIBA', 'HIFU/SMAS', 'Гидропилинг'];

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      <PricingHeader />
      {/* Вводная секция */}
      <section className="w-full bg-gradient-to-b from-gray-200 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Аппаратная косметология
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Современные технологии для вашей красоты: процедуры Indiba, HIFU/SMAS-лифтинг и гидропилинг (HydraFacial) для омоложения и ухода.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-lg text-gray-600 font-semibold">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardwareCosmetology;