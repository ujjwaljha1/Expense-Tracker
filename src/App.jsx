import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

import DateSelector from './components/DateSelector';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const editExpense = (updatedExpense) => {
    setExpenses(expenses.map(expense => (expense.id === updatedExpense.id ? updatedExpense : expense)));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>
      <DateSelector setSelectedDate={setSelectedDate} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList 
        expenses={expenses} 
        deleteExpense={deleteExpense} 
        editExpense={editExpense} 
      />
     
    </div>
  );
}

export default App;
