import React, { useState } from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';

const Piercing = () => {
  const [activeTab, setActiveTab] = useState('Уши');

  const tabs = ['Уши', 'Лицо', 'Тело'];

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
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Цены и виды пирсинга уточняйте у наших специалистов.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Piercing;