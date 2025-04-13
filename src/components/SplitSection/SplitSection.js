import React from 'react';
import split1 from '../../static/images/split_1.jpg';
import split2 from '../../static/images/split_2.jpg';
import split3 from '../../static/images/split_3.jpg';
import split4 from '../../static/images/split_4.jpg';
import split5 from '../../static/images/split_5.jpg';
import split6 from '../../static/images/split_6.jpg';

// Компонент для рендеринга одного блока с изображением и текстом
const SectionBlock = ({ item }) => (
  <div className="relative w-full md:w-1/2 h-96 bg-gray-800 grayscale hover:grayscale-0 transition-all duration-300 "> {/* Увеличил высоту до h-96 (384px) и добавил фон */}
    <img
      src={item.img}
      alt={item.text.title}
      className="w-full h-full object-cover" // Оставил object-cover для сохранения пропорций
      // className="w-full h-full object-fill" // Используйте object-fill, если хотите растянуть изображение (возможно искажение)
      loading="lazy"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10 ">
      <h2 className="text-3xl md:text-3xl font-bold text-center">
        {item.text.title}
      </h2>
      {item.text.subtitle && (
        <p className="text-lg md:text-base text-center mt-2">
          {item.text.subtitle}
        </p>
      )}
    </div>
  </div>
);

const SplitSection = () => {
  const sections = [
    {
      left: {
        img: split1,
        text: {
          title: 'Эстетическая косметология',
          subtitle: 'Чистка лица,пилинги ,маски,уходы',
        },
      },
      right: {
        img: split2,
        text: { 
          title: 'Аппаратная косметология',
          subtitle: 'Indiba (Индиба),HIFU/ SMAS-лифтинг,Гидропилинг (HydraFacial',
        },
      },
    },
    {
      left: {
        img: split3,
        text: {
          title: 'Лазерная эпиляция',
        },
      },
      right: {
        img: split4,
        text: { title: 'Пирсинг' },
      },
    },
    {
      left: {
        img: split5,
        text: {
          title: 'Шугаринг и восковая депиляция',
        },
      },
      right: {
        img: split6,
        text: { title: 'Коррекция фигуры',
          subtitle: 'Массаж,обертывание, Indiba'},
         },
      },
    ]
  
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row w-full" // Добавил mb-4 для отступов
        >
          <SectionBlock item={section.left} />
          <SectionBlock item={section.right} />
        </div>
      ))}
    </div>
  );
}

export default SplitSection;