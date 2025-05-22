import { Swiper, SwiperSlide } from "swiper/react";
import { Element } from "react-scroll";
import "swiper/css"
import React, { useState, useEffect, useRef } from "react";
import service_1 from "../../static/images/services/service_1.jpg";
import service_2 from "../../static/images/services/service_2.jpg";
import service_3 from "../../static/images/services/service_3.jpg";

const SwiperTest = () => {

    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const prevRef = useRef(null); 
    const nextRef = useRef(null); 

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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Наши услуги</h2>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ 
            clickable: true,
            el: ".swiper-pagination-custom",
           }}
          navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
          onSwiper={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }}
    breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  }}
  centeredSlides={true}
  className={`w-full ${isModalOpen ? "z-0" : "z-10"}`}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} onClick={() => openModal(service)}>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={service.img} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <p className="text-lg font-bold">{service.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

<div className="swiper-pagination-custom absolute left-1/2 transform -translate-x-1/2 bottom-[-20px]"></div>


      <div
        ref={prevRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-200 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div
        ref={nextRef}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-200 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      </div>
    </Element>
  )

}

export default SwiperTest;