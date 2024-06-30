import React from 'react';

function DateSelector({ setSelectedDate }) {
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-1">Select Date</label>
      <input 
        type="date" 
        className="w-full p-2 border rounded" 
        onChange={handleDateChange} 
      />
    </div>
  );
}

export default DateSelector;
