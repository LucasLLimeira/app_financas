// src/components/MenuItem.jsx
import React from 'react';

const MenuItem = ({ label, icon, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className="flex items-center px-4 py-2 text-lg hover:bg-cyan-600 rounded-md transition duration-200"
    >
      {/* Ícone do FontAwesome */}
      <i className={`${icon} mr-4`}></i>  
      {label}
    </a>
  );
};

export default MenuItem;
