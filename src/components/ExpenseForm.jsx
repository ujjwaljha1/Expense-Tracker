import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    const newExpense = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
    };

    addExpense(newExpense);
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1">Expense Name</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1">Amount</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <button 
        type="submit" 
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
