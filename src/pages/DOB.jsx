import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); // Last 100 years

const DOB = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleNext = () => {
    if (selectedMonth && selectedDay && selectedYear) {
      const dob = `${selectedMonth} ${selectedDay}, ${selectedYear}`;
      console.log("Date of Birth:", dob);
      navigate('/Aim'); // Navigate to the next page or handle submission
    } else {
      console.log("Please complete all fields.");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center bg-gray-100 text-black h-screen">
      {/* Header */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold mb-8">When Were You Born?</h1>
      </div>

      {/* Date of Birth Selection */}
      <div className="flex flex-col items-center space-y-4 mb-10">
        <h2 className="text-xl font-semibold mb-2">Select Your Date of Birth</h2>

        {/* Month Dropdown */}
        <div className="flex items-center space-x-4">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="" disabled>Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>

          {/* Day Dropdown */}
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="" disabled>Day</option>
            {days.map((day, index) => (
              <option key={index} value={day}>{day}</option>
            ))}
          </select>

          {/* Year Dropdown */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="" disabled>Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Next Button */}
      <div className="w-full px-4 mb-10">
        <button
          className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105 active:scale-95"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DOB;
