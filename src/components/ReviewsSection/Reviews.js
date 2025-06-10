import React, { useState, useEffect, useRef } from 'react';
import yandex_logo from '../../static/images/yandex_logo.png';
import { Element } from "react-scroll";

const reviews = [
  {
    name: "Регина",
    location: "на Яндекс.Картах",
    text: "Я посетила косметологический салон красоть Waxing House и осталась в полном восторге о качества услуг и профессионализма персонала Мастера были очень внимательны к моим пожеланиям и предложили индивидуальный подход к уходу за моей кожей. Результат превзошел все мои ожидания -кожа стала более мягкой и сияющей. Я осталась довольна и обязательно вернусь снова!"
  },
  {
    name: "Елена Мур",
    location: "на Яндекс.Картах",
    text: "Прекрасное место, очень вежливые, внимательные мастера и администраторы, сервис на высоком уровне, мастер объясняет каждый шаг, оченк аккуратно работают, хожу уже не первый раз довольна всем. Качество услуг на высоком уровне чувствуешь себя в надежных руках. Советую!"
  },
  {
    name: "Карина Амалатова",
    location: "на Яндекс.Картах",
    text: "Посетила мастера шугаринга Маро впервые и осталась в восторге!Процедура прошла быстрои безболезненно, благодаря профессионализму мастера. Чистота и уют салона также оставили приятные впечатления. Обязательно вернусь снова л рекомендую всем, кто ищет качественные услуги шугаринга!"
  },
  {
    name: "Карина Саакян",
    location: "на Яндекс.Картах",
    text: "Несколько недель назад делала лазернук депиляцию у мастера Сюзанны. Процедура прошла идеально и комфортно! безболезненно и быстро. Меня очень хорошо встретили, ответили на все вопросы, всё объяснили. Очень благодарна за такой теплый прием. И отдельное спасибо Сюзанне за профессионализм и индивидуальный подход. Рекомендую!"
  }
];

const RatingCard = () => {
  return (
    <Element name="reviews">
      <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 ">
        <div className="flex-1 px-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800">5.0</h1>
            <div>
              <span className="text-yellow-400 block">★★★★★</span>
              <span className="text-gray-600 text-sm md:text-base">241 оценка</span>
            </div>
          </div>
          <div className="mt-2 break-words flex items-center space-x-4 ">
            <img src={yandex_logo} alt="Yandex Logo" className="w-10 h-10 md:w-12 md:h-12" />
            <div>
              <span className="text-red-500 text-base md:text-xl">Хорошее место</span>
              <p className="text-gray-600 text-sm md:text-lg break-words">Любимые организации по оценкам и отзывам пользователей Яндекса</p>
            </div>  
          </div>
        </div>
      </div>
    </Element>
  );
};
const ReviewCard = ({ review }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxLength = 150;
  const modalRef = useRef();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const displayText = review.text.slice(0, maxLength) + (review.text.length > maxLength ? "..." : "");

  return (
    <div className="bg-gray-50 p-6 rounded-lg w-full flex flex-col justify-between">
      <div>
        <h3 className="text-4xl font-bold text-gray-800">{review.name}</h3>
        <p className="text-red-500 text-xl">{review.location}</p>
        <p className="text-gray-600 mt-2 text-xl">{review.text.length > maxLength ? displayText : review.text}</p>
        {review.text.length > maxLength && (
          <button
            onClick={openModal}
            className="text-xl text-gray-800"
          >
            ...
          </button>
        )}
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg max-w-md w-full relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
            <p className="text-orange-500 text-sm">{review.location}</p>
            <p className="text-gray-600 mt-2 text-sm">{review.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const displayedReviews = () => {
    const reviewsToShow = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      reviewsToShow.push(reviews[index]);
    }
    return reviewsToShow;
  };

  return (
    <div className="mx-auto max-w-6xl py-6">
      <RatingCard />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {displayedReviews().map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevReview}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          ←
        </button>
        <button
          onClick={nextReview}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;