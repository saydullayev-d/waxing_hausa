import React, { useState, useEffect, useRef } from 'react';

const QuestionSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "На какой косметике вы работаете?",
      answer: "Мы работаем  на косметике Holy Land (Израиль)",
    },
    {
      question: "Сколько стоит консультация?",
      answer: "Консультация бесплатная",
    },
    {
      question: "Есть ли у вас парковка?",
      answer: "Радом большая придомовая территория с парковкой",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[70%] mt-20 bg-white">
      <h1 className="text-6xl font-bold text-black text-center">Частые вопросы</h1>
      <div className="mt-10 w-[90%]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="mb-4 ">
              <div className="flex items-center justify-between">
                <label className="block text-2xl text-gray-700">{faq.question}</label>
                <button onClick={() => toggleAnswer(index)} className="text-3xl text-gray-700">
                  {isOpen ? '×' : '+'}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                {isOpen && (
                  <div className="mt-5 border-b border-gray-300 rounded">
                    <p className="text-xl text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionSection;