import React from 'react';

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id} className="flex justify-between items-center mb-2">
            <span>{expense.name} - {expense.amount}</span>
            <div>
              <button 
                className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                onClick={() => editExpense(expense)}
              >
                Edit
              </button>
              <button 
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
