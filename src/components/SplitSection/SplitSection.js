import React from 'react';
import { Link } from 'react-router-dom';
import split1 from '../../static/images/split_1.jpg';
import split2 from '../../static/images/split_2.jpg';
import split3 from '../../static/images/split_3.jpg';
import split4 from '../../static/images/split_4.jpg';
import split5 from '../../static/images/split_5.jpg';
import split6 from '../../static/images/split_6.jpg';

// Компонент для рендеринга одного блока с изображением и текстом
const SectionBlock = ({ item }) => (
  <div className="relative w-full h-96 bg-gray-800 grayscale-0 lg:grayscale md:grayscale hover:grayscale-0 transition-all duration-300">
    <img
      src={item.img}
      alt={item.text.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-10">
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
          subtitle: 'Чистка лица, пилинги, маски, уходы',
        },
        path: '/esthetic-cosmetology',
      },
      right: {
        img: split2,
        text: {
          title: 'Аппаратная косметология',
          subtitle: 'Indiba (Индиба), HIFU/SMAS-лифтинг, Гидропилинг (HydraFacial)',
        },
        path: '/hardware-cosmetology',
      },
    },
    {
      left: {
        img: split3,
        text: {
          title: 'Лазерная эпиляция',
        },
        path: '/laser-epilation',
      },
      right: {
        img: split4,
        text: { title: 'Пирсинг' },
        path: '/piercing',
      },
    },
    {
      left: {
        img: split5,
        text: {
          title: 'Шугаринг и восковая депиляция',
        },
        path: '/sugaring-waxing',
      },
      right: {
        img: split6,
        text: {
          title: 'Коррекция фигуры',
          subtitle: 'Массаж, обертывание, Indiba',
        },
        path: '/body-contouring',
      },
    },
  ];

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col md:flex-row w-full">
          <Link to={section.left.path} className="w-full md:w-1/2 block">
            <SectionBlock item={section.left} />
          </Link>
          <Link to={section.right.path} className="w-full md:w-1/2 block">
            <SectionBlock item={section.right} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SplitSection;