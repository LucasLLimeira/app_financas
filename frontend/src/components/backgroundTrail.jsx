import React, { useState, useEffect } from 'react';

const BackgroundTrailAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.6), rgba(0, 255, 255, 0.3))`,
    transition: 'background 0.1s ease-out',
    minHeight: '100vh', // Garantir que o fundo ocupe toda a altura da tela
  };

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen" style={backgroundStyle}>
      {/* O fundo dinâmico ficará aqui */}
    </div>
  );
};

export default BackgroundTrailAnimation;
