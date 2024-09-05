import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThisWeek = () => {
  const [weightGain, setWeightGain] = useState(0);
  const navigate = useNavigate(); // Correctly import and use useNavigate

  const handleSliderChange = (event) => {
    setWeightGain(event.target.value);
  };

  const handleNext = () => {
    console.log(`User wants to gain ${weightGain} kg this week.`);
    navigate('/Details'); // Navigate to Details page
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 text-black h-screen p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Weekly Weight  Goal</h1>
        <p className="text-xl font-medium">Set your weight goal for this week</p>
      </div>

      {/* Slider Section */}
      <div className="w-full max-w-lg mx-auto">
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={weightGain}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none"
          style={{
            background: `linear-gradient(to right, #000 ${weightGain * 10}%, #ccc ${weightGain * 10}%)`,
          }}
        />
        <div className="flex justify-between text-lg font-medium mt-4">
          <span>0 kg</span>
          <span>{weightGain} kg</span>
          <span>10 kg</span>
        </div>
      </div>

      {/* Display Selected Value */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold">Your Goal:</h2>
        <p className="text-xl"> {weightGain} kg this week</p>
      </div>

      {/* Next Button */}
      <div className="w-full px-4 mt-10">
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

export default ThisWeek;
