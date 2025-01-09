import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Entries = () => {
  const { entries, addEntry, deleteEntry } = useContext(GlobalContext);
  const [newEntry, setNewEntry] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    type: 'income',
    description: '',
  });

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formattedEntry = {
      ...newEntry,
      date: new Date(newEntry.date).toISOString(),
    };
    
    addEntry(formattedEntry);
    
    setNewEntry({
      title: '',
      amount: '',
      date: '',
      category: '',
      type: 'income',
      description: '',
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? 'Data inválida' : date.toLocaleDateString('pt-BR');
  };

  return (
    <div className='bg-gray-100 bg-opacity-50 flex flex-col min-h-[54rem] lg:w-[85.5rem] text-black rounded-[4rem] border-4 border-cyan-100 fixed top-0 left-0 z-20 m-6 p-2 ml-[33rem]'>
      <h1 className='flex p-3 text-xl'>Entries</h1>
      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='flex justify-between items-center space-x-4'>
          <input
            type='text'
            name='title'
            placeholder='Título'
            value={newEntry.title}
            onChange={handleChange}
            className='p-2 border rounded w-1/4'
          />
          <input
            type='number'
            name='amount'
            placeholder='Valor'
            value={newEntry.amount}
            onChange={handleChange}
            className='p-2 border rounded w-1/4'
          />
          <input
            type='date'
            name='date'
            value={newEntry.date}
            onChange={handleChange}
            className='p-2 border rounded w-1/4'
          />
          <select
            name='category'
            value={newEntry.category}
            onChange={handleChange}
            className='p-2 border rounded w-1/4'
          >
            <option value=''>Categoria</option>
            <option value='Salary'>Salário</option>
            <option value='Business'>Negócios</option>
            <option value='Other'>Outros</option>
          </select>
        </div>
        <div className='mt-4'>
          <input
            type='text'
            name='description'
            placeholder='Descrição'
            value={newEntry.description}
            onChange={handleChange}
            className='p-2 border rounded w-full'
          />
        </div>
        
        <button type='submit' className='mt-4 p-2 bg-blue-500 text-white rounded'>
          Adicionar Entrada
        </button>
      </form>
      <div>
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry._id || entry.tempId || new Date().getTime()} className='flex justify-between items-center p-2 border-b'>
                <span>
                    {entry.title} - ${entry.amount} - {entry.date && !isNaN(new Date(entry.date).getTime()) ? new Date(entry.date).toLocaleDateString('pt-BR') : 'Data inválida'} - {entry.category}
                </span>
              <button onClick={() => deleteEntry(entry._id)} className='text-red-500 hover:text-red-700'>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        ) : (
          <p>Nenhuma entrada disponível</p>
        )}
      </div>
    </div>
  );
};

export default Entries;
