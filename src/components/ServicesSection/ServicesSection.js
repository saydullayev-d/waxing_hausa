import { Element } from "react-scroll";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import service_1 from "../../static/images/services/service_1.jpg";
import service_2 from "../../static/images/services/service_2.jpg";
import service_3 from "../../static/images/services/service_3.jpg";

const ServicesSection = () => {
  const services = [
    {
      img: service_1,
      title: "Диодный лазер",
      desc: "ВСЕ ТЕЛО полностью + лицо",
      price: "12999 ДРАМ",
      link: "https://widget.sonline.su/ru/services/?placeid=753797978",
    },
    {
      img: service_2,
      title: "Лифтинг без уколов с INDIBA!",
      desc: "* 6 сеансов",
      price: "60 000 ДРАМ",
      link: "https://widget.sonline.su/ru/services/?placeid=753797978",
    },
    {
      img: service_3,
      title: "Шугаринг",
      desc: "Всего тело",
      price: "30000 ДРАМ",
      link: "https://widget.sonline.su/ru/services/?placeid=753797978",
    },
  ];

  const handleServiceClick = (link) => {
    window.open(link, "_blank");
  };

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
                  onClick={() => handleServiceClick(service.link)}
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
              onClick={() => handleServiceClick(service.link)}
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
    </Element>
  );
};

export default ServicesSection;