// src/components/Sidebar.jsx
import React from 'react';
import MenuItem from './MenuItem';  // Importando o MenuItem
import userPhoto from '../assets/foto.png';

const Sidebar = () => {
  const user = {
    name: 'Lucas Limeira',
    balance: 'R$ 1.200,00',
    photo: userPhoto,  // Caminho da imagem no diretório public
  };

  return (
    <div className="flex flex-col min-h-screen w-full md:w-64 lg:w-1/4 bg-cyan-400 text-white rounded-t-[4rem] fixed top-0 left-0 z-20 m-6 p-2 ">
      {/* Header */}
      <div className="flex flex-col items-center py-6">
        <img src={user.photo} alt="User" className="w-32 h-32 rounded-full border-1 border-white mb-4" />
        <p className="text-xl font-semibold">{user.name}</p>
        <p className="text-sm text-gray-200">{user.balance}</p>
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-6 space-y-4">
        {/* Passando as classes dos ícones para o MenuItem */}
        <MenuItem label="Dashboard" icon="fa-solid fa-chart-line" onClick={() => alert('Dashboard clicked')} />
        <MenuItem label="Transações" icon="fa-solid fa-receipt" onClick={() => alert('Transações clicked')} />
        <MenuItem label="Entradas" icon="fa-solid fa-money-bill-trend-up" onClick={() => alert('Categorias clicked')} />
        <MenuItem label="Saídas" icon="fa-solid fa-money-bill-transfer" onClick={() => alert('Configurações clicked')} />
        <MenuItem label="Sign Out" icon="fa-solid fa-right-from-bracket" onClick={() => alert('Configurações clicked')} />
      </div>
    </div>
  );
};

export default Sidebar;
