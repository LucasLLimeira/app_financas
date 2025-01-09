import React from 'react';

const Sidebar = () => {
  const user = {
    name: 'Lucas Limeira',
    balance: 'R$ 1.200,00',
    photo: '/images/user-profile.jpg',  // Caminho da imagem no diretório public
  };

  return (
    <div className="flex flex-col min-h-screen w-full md:w-64 lg:w-1/4 bg-cyan-500 text-white rounded-3xl fixed top-0 left-0 z-20 m-4">
      {/* Header */}
      <div className="flex flex-col items-center py-6">
        <img src={user.photo} alt="User" className="w-24 h-24 rounded-full border-4 border-white mb-4" />
        <p className="text-xl font-semibold">{user.name}</p>
        <p className="text-sm text-gray-200">{user.balance}</p>
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-6 space-y-4">
        <a href="#" className="px-4 py-2 text-lg hover:bg-cyan-600 rounded-md transition duration-200">Dashboard</a>
        <a href="#" className="px-4 py-2 text-lg hover:bg-cyan-600 rounded-md transition duration-200">Transações</a>
        <a href="#" className="px-4 py-2 text-lg hover:bg-cyan-600 rounded-md transition duration-200">Categorias</a>
        <a href="#" className="px-4 py-2 text-lg hover:bg-cyan-600 rounded-md transition duration-200">Configurações</a>
      </div>
    </div>
  );
};

export default Sidebar;
