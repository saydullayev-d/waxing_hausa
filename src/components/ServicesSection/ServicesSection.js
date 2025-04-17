import { Element } from "react-scroll";
import React, { useState } from "react";
import service_1 from "../../static/images/services/service_1.jpg";
import service_2 from "../../static/images/services/service_2.jpg";
import service_3 from "../../static/images/services/service_3.jpg";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      img: service_1,
      title: "Диодный лазер",
      desc: "ВСЕ ТЕЛО полностью + лицо",
      price: "12999 ДРАМ",
      link: "#",
    },
    {
      img: service_2,
      title: "Лифтинг без уколов с INDIBA!",
      desc: "* 6 сеансов",
      price: "60 000 ДРАМ",
      link: "#",
    },
    {
      img: service_3,
      title: "Шугаринг",
      desc: "Всего тело ",
      price: "30000 ДРАМ",
      link: "#",
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <Element name="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-[700px]"
            >
              <div className="overflow-hidden rounded-lg h-[500px] flex items-center justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold mt-6 text-center text-gray-800 tracking-tight line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-center line-clamp-2">{service.desc}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  
                    <span className="text-xl font-semibold text-pastel-green">{service.price}</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{selectedService.title}</h3>
            <p className="text-gray-600 mb-4">{selectedService.desc}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 font-medium">Цена:</span>
              <span className="text-xl font-semibold text-amber-700">{selectedService.price}</span>
            </div>
            <a
              href={selectedService.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-amber-800 w-full"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </Element>
  );
};

export default ServicesSection;