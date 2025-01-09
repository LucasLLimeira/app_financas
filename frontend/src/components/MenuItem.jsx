// src/components/MenuItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, icon, isActive, onClick, to }) => {
  return (
    <Link
      to={to} // Usando o Link para navegação
      onClick={(e) => {
        onClick(); // Chamando a função de click para marcar o item como ativo
      }}
      className={`flex items-center px-4 py-1 text-lg rounded-md transition duration-200 group ${
        isActive ? ' text-gray-600' : 'text-gray-600' // Condicional para cor ativa
      }`}
    >
      {/* Linha antes da palavra */}
      <span
        className={`mr-2 mb-1 font-bold ${isActive ? 'text-gray-600' : 'text-transparent'} `}
      >
        |
      </span>
      {/* Ícone do FontAwesome */}
      <i className={`${icon} mr-4`} />
      {/* Texto do Menu */}
      <span className={`group-hover:font-bold ${isActive ? 'font-bold' : ''}`}>
        {label}
      </span>
    </Link>
  );
};

export default MenuItem;
