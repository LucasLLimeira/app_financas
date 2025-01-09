// src/components/Sidebar.jsx
import React, { useState } from 'react';
import MenuItem from './MenuItem';  
import userPhoto from '../assets/foto.png';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('/');  // Controla o item ativo

  const user = {
    name: 'Lucas Limeira',
    balance: 'R$ 1.200,00',
    photo: userPhoto,  // Caminho da imagem no diretório public
  };

  const handleMenuItemClick = (path) => {
    setActiveItem(path); // Atualiza o item ativo
  };

  return (
    <div className="flex flex-col min-h-[54rem] w-full md:w-64 lg:w-1/4 bg-cyan-400 bg-opacity-50 text-white rounded-[4rem] border-4 border-cyan-100 fixed top-0 left-0 z-20 m-6 p-2">
      {/* Header */}
      <div className="flex flex-col items-center py-6">
        <img src={userPhoto} alt="User" className="w-32 h-32 rounded-full border-1 border-white mb-4" />
        <p className="text-xl font-semibold text-gray-600">{user.name}</p>
        <p className="text-sm text-gray-500">{user.balance}</p>
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-6 space-y-4">
        {/* Passando isActive e onClick para cada item */}
        <MenuItem
          label="Dashboard"
          icon="fa-solid fa-chart-line"
          isActive={activeItem === '/'}
          onClick={() => handleMenuItemClick('/')}
          to="/"
        />
        <MenuItem
          label="Transações"
          icon="fa-solid fa-receipt"
          isActive={activeItem === '/transactions'}
          onClick={() => handleMenuItemClick('/transactions')}
          to="/transactions"
        />
        <MenuItem
          label="Entradas"
          icon="fa-solid fa-money-bill-trend-up"
          isActive={activeItem === '/entries'}
          onClick={() => handleMenuItemClick('/entries')}
          to="/entries"
        />
        <MenuItem
          label="Saídas"
          icon="fa-solid fa-money-bill-transfer"
          isActive={activeItem === '/exits'}
          onClick={() => handleMenuItemClick('/exits')}
          to="/exits"
        />
        <MenuItem
          label="Sign Out"
          icon="fa-solid fa-right-from-bracket"
          isActive={activeItem === '/signout'}
          onClick={() => handleMenuItemClick('/signout')}
          to="/signout"
        />
      </div>
    </div>
  );
};

export default Sidebar;
