// src/components/Main.jsx
import React from 'react';

const Main = ({ children }) => {
  return (
    <div className="ml-[16rem] lg:ml-[25%] p-6 z-10">
      {/* Conteúdo será renderizado aqui */}
      {children}
    </div>
  );
};

export default Main;
