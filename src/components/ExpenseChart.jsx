import React from 'react';
import { Bar } from 'react-chartjs-2';

function ExpenseChart({ expenses, selectedDate }) {
  const filteredExpenses = selectedDate
    ? expenses.filter(expense => new Date(expense.date).getMonth() === new Date(selectedDate).getMonth())
    : expenses;

  const data = {
    labels: filteredExpenses.map(expense => expense.name),
    datasets: [
      {
        label: 'Expenses',
        data: filteredExpenses.map(expense => expense.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Expense Chart</h2>
      <Bar data={data} />
    </div>
  );
}

export default ExpenseChart;
