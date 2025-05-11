import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    name: "Даря Куженова",
    location: "на Яндекс.Картах",
    text: "Мастер Лиза очень аккуратно и бережно сделала. Прислушалась к пожеланиям и дала рекомендации по стрижке. Используются качественные материалы для работы с волосами. Отличный сервис. Даря рекомендует по стрижке. Всем довольна ❤️"
  },
  {
    name: "Екатерина П.",
    location: "на Яндекс.Картах",
    text: "Потрясающий салон! Мастер Анна Пак от бога! Сразу поняла клиента, сделала правку бровей и макияж другу, дала рекомендации, прислушивалась, вежливая, аккуратная, руками творит чудеса! Как здорово, когда люди делают качественно свою работу! Персонал приветливый, дружелюбный, предложат чай/кофе. Действительно отдых!"
  },
  {
    name: "Татьяна",
    location: "на Яндекс.Картах",
    text: "Ну что ж, Виктория, вы крутые! Виктория не только классная, но и меня их харизма покорила. Очень милые, ответственные и веселые 😍 Я в восторге!"
  }
];

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
    <div className="bg-gray-50 p-6 rounded-lg shadow-md h-[90%] w-full flex flex-col justify-between">
      <div>
        <h3 className="text-4xl font-bold text-gray-800">{review.name}</h3>
        <p className="text-orange-500 text-xl">{review.location}</p>
        <p className="text-gray-600 mt-2 text-xl">{review.text.length > maxLength ? displayText : review.text}</p>
        {review.text.length > maxLength && (
          <button
            onClick={openModal}
            className="text-blue-500 mt-2 text-sm underline"
          >
            Показать полностью
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
    <div className="max-w-5xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedReviews().map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
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