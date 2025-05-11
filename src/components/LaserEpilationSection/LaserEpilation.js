import React from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';
const LaserEpilation = () => {
  const services = [
    { name: 'Подмышки', price: '3500 драм' },
    { name: 'Глубокое бикини', price: '9000 драм' },
    { name: 'Руки до локтя', price: '3500 драм' },
    { name: 'Ноги полностью', price: '9000 драм' },
    { name: 'Ноги голени', price: '5000 драм' },
    { name: 'Усики', price: '2000 драм' },
    { name: 'Руки полностью', price: '6500 драм' },
    { name: 'Бёдра', price: '5000 драм' },
    { name: 'Классическое бикини', price: '4500 драм' },
    { name: 'Лицо полностью', price: '4000 драм' },
    { name: 'Подбородок', price: '2000 драм' },
    { name: 'Дорожка на животе', price: '3000 драм' },
    { name: 'Нос', price: '2000 драм' },
    { name: 'Межъягодичная впадина', price: '2500 драм' },
    { name: 'Живот полностью', price: '5000 драм' },
    { name: 'Ягодицы', price: '5000 драм' },
    { name: 'Шея', price: '2000 драм' },
    { name: 'Бакенбарды', price: '2000 драм' },
    { name: 'Спина', price: '8000 драм' },
    { name: 'Все тело (комбо)', price: '12999 драм' },
  ];

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

      {/* Секция услуг */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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