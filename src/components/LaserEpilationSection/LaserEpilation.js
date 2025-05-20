import React, { useState } from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';

const LaserEpilation = () => {
  const [activeTab, setActiveTab] = useState('Лицо');

  const services = {
    'Лицо': [
      { name: 'Усики', price: '2000 драм' },
      { name: 'Лицо полностью', price: '4000 драм' },
      { name: 'Подбородок', price: '2000 драм' },
      { name: 'Нос', price: '2000 драм' },
      { name: 'Бакенбарды', price: '2000 драм' },
      { name: 'Шея', price: '2000 драм' },
    ],
    'Тело': [
      { name: 'Подмышки', price: '3500 драм' },
      { name: 'Дорожка на животе', price: '3000 драм' },
      { name: 'Живот полностью', price: '5000 драм' },
      { name: 'Ягодицы', price: '5000 драм' },
      { name: 'Межъягодичная впадина', price: '2500 драм' },
      { name: 'Спина', price: '8000 драм' },
    ],
    'Руки': [
      { name: 'Руки до локтя', price: '3500 драм' },
      { name: 'Руки полностью', price: '6500 драм' },
    ],
    'Ноги': [
      { name: 'Ноги полностью', price: '9000 драм' },
      { name: 'Ноги голени', price: '5000 драм' },
      { name: 'Бёдра', price: '5000 драм' },
    ],
    'Бикини': [
      { name: 'Глубокое бикини', price: '9000 драм' },
      { name: 'Классическое бикини', price: '4500 драм' },
    ],
    'Комбо': [
      { name: 'Все тело (комбо)', price: '12999 драм' },
    ],
  };

  const tabs = ['Лицо', 'Тело', 'Руки', 'Ноги', 'Бикини', 'Комбо'];

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      <PricingHeader />
      {/* Вводная секция */}
      <section className="w-full bg-gradient-to-b from-gray-200 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Лазерная эпиляция
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Эффективное и безопасное удаление волос с помощью современных лазерных технологий для всех зон тела.
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

export default LaserEpilation;