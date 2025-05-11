import React from 'react';
import PricingHeader from '../PricingHeader/PricingHeader';

const BodyContouring = () => {
  const services = [
    { name: 'Массаж', price: 'Цена по запросу' },
    { name: 'Обертывание', price: 'Цена по запросу' },
    { name: 'Indiba', price: 'Цена по запросу' },
  ];

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

export default BodyContouring;