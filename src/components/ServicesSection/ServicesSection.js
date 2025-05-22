import { Element } from "react-scroll";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
      desc: "Всего тело",
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

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedService]);

  return (
    <Element name="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>

        {/* Mobile: Swiper Carousel, Desktop: Grid */}
        <div className="block sm:hidden">
          <Swiper
            spaceBetween={5}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1.3 },
              480: { slidesPerView: 1.5 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-transparent p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col w-[80vw] max-w-[300px] h-[700px] mx-auto"
                  onClick={() => openModal(service)}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-[700px]"
              onClick={() => openModal(service)}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 py-15 overflow-x-hidden">
          <div className="bg-white rounded-xl w-full max-w-xl mx-4 relative h-[90%] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="w-full h-[90%] flex items-center justify-center py-6">
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-auto h-full object-contain rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedService.title}</h3>
              <p className="text-xl font-semibold text-gray-800 mb-2">{selectedService.price}</p>
              <p className="text-gray-600 mb-2">{selectedService.desc}</p>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default ServicesSection;