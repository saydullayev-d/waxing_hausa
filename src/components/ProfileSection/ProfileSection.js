import React from 'react';

const ProfileCard = ({ name, role }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-48 h-64 bg-gray-300 mb-4"></div>
      <h2 className="text-xl font-bold uppercase">{name}</h2>
      <p className="text-sm uppercase">{role}</p>
    </div>
  );
};

const ProfileSection = () => {
  const profiles = [
    { name: "Анна", role: "Основатель" },
    { name: "Юлия", role: "Основатель" },
    { name: "Виктория", role: "Топ-стилист" },
    { name: "Елена", role: "Стилист" },
    { name: "Мария", role: "Стилист" },
    { name: "Ольга", role: "Дизайнер" },
    { name: "Светлана", role: "Дизайнер" },
    { name: "Наталья", role: "Менеджер" },
  ];

  return (
    <section className="p-8">
      <div className="grid grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} name={profile.name} role={profile.role} />
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;