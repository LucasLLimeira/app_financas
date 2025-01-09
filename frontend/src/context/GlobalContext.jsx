import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Função para buscar entradas (GET)
  const fetchEntries = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/get-incomes');
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error('Erro ao buscar as entradas:', error);
    }
  };

  // Função para adicionar uma nova entrada (POST)
  const addEntry = async (entry) => {
    try {
      const formattedEntry = {
        ...entry,
        date: entry.date ? new Date(entry.date).toISOString() : new Date().toISOString(),
      };
  
      const response = await fetch('http://localhost:5000/api/v1/add-income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedEntry),
      });
      
      const newEntry = await response.json();
      setEntries([...entries, newEntry]);
    } catch (error) {
      console.error('Erro ao adicionar a entrada:', error);
    }
  };

  useEffect(() => {
    fetchEntries();  // Aqui você chama a função para carregar as entradas
  }, []);

  return (
    <GlobalContext.Provider value={{ entries, addEntry, fetchEntries }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
