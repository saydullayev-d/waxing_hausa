import React from 'react';

import team_1 from '../../static/images/team/team_1.jpg';
import team_2 from '../../static/images/team/team_2.jpg';
import team_3 from '../../static/images/team/team_3.jpg';
import team_4 from '../../static/images/team/team_4.jpg';
import team_5 from '../../static/images/team/team_5.jpg';
import team_6 from '../../static/images/team/team_6.jpg';
import team_7 from '../../static/images/team/team_7.jpg';
import team_8 from '../../static/images/team/team_8.jpg';

const TeamMember = ({ name, role, buttonText, imgSrc }) => {
  return (
<div className="flex flex-col items-start w-full sm:w-1/2 md:w-1/3 lg:w-[31%]">
      <img src={imgSrc} alt={name} className="w-full h-full object-cover mb-6" />
      <h2 className="text-3xl font-bold uppercase font-['Arial'] tracking-wide mb-3">{name}</h2>
      <p className="text-sm uppercase font-['Arial'] text-gray-600 mb-6 tracking-wider">{role}</p>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-16 bg-white w-[96%] mx-auto">
      <TeamMember name="Анна" role="Основатель" imgSrc={team_1} />
      <TeamMember name="Юлия" role="Основатель"  imgSrc={team_2} />
      <TeamMember name="Виктория" role="Топ-стилист"  imgSrc={team_3} />
      <TeamMember name="Екатерина" role="Стилист"  imgSrc={team_4} />
      <TeamMember name="Мария" role="Стилист"  imgSrc={team_5} />
      <TeamMember name="Ольга" role="Визажист"  imgSrc={team_6} />
      <TeamMember name="Наталья" role="Визажист"  imgSrc={team_7} />
      <TeamMember name="Светлана" role="Администратор"  imgSrc={team_8} />
    </div>
  );
};

export default TeamSection;