import React from 'react';
import { Element } from "react-scroll";
import team_1 from '../../static/images/team/team_1.jpg';
import team_2 from '../../static/images/team/team_2.jpg';
import team_3 from '../../static/images/team/team_3.jpg';
import team_4 from '../../static/images/team/team_4.jpg';
import team_5 from '../../static/images/team/team_5.jpg';
import team_6 from '../../static/images/team/team_6.jpg';
import team_7 from '../../static/images/team/team_7.jpg';
import team_8 from '../../static/images/team/team_8.jpg';

const TeamMember = ({ name, role, imgSrc }) => {
  return (
    <div className="flex flex-col items-start w-full px-2">
      <img src={imgSrc} alt={name} className="w-full h-auto object-cover mb-6" />
      <h2 className="text-2xl lg:text-3xl md:text-3xl font-bold uppercase font-['Arial'] tracking-wide mb-3">{name}</h2>
      <p className="text-sm uppercase font-['Arial'] text-gray-600 mb-6 tracking-wider">{role}</p>
    </div>
  );
};

const TeamSection = () => {
  return (
    <Element name="team">
      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 py-16 bg-white w-[96%] mx-auto" style={{ minWidth: '320px' }}>
        <TeamMember name="Карине Даниелян" role="Косметолог-эстетист" imgSrc={team_1} />
        <TeamMember name="Сюзи Зограбян" role="Косметолог-эстетист" imgSrc={team_2} />
        <TeamMember name="Марго Барсегян" role="Косметолог-эстетист" imgSrc={team_3} />
        <TeamMember name="Марика Франгулян" role="Врач косметолог" imgSrc={team_4} />
        <TeamMember name="Нона" role="Администратор" imgSrc={team_5} />
        <TeamMember name="Нуне" role="Администратор" imgSrc={team_6} />
        <TeamMember name="Диана" role="Администратор" imgSrc={team_7} />
        <TeamMember name="Арус" role="Управляющая" imgSrc={team_8} />
      </div>
    </Element>
  );
};

export default TeamSection;