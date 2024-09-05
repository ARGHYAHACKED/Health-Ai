import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const navigate = useNavigate();
  const [workoutFrequency, setWorkoutFrequency] = useState("");
  const [workoutType, setWorkoutType] = useState("");

  const handleNext = () => {
    if (workoutFrequency && workoutType) {
      console.log("Workout Frequency:", workoutFrequency);
      console.log("Workout Type:", workoutType);
      navigate('/weight'); // Navigate to the next page or handle submission
    } else {
      console.log("Please complete all fields.");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center bg-gray-100 text-black">
      {/* Header */}
      <div className="mt-10">
        <h1 className="text-5xl items-center font-bold mb-8 ml-4">How many workouts do you do per week?</h1>
        <p className="text-base mb-8 m-3">Please select the number of workouts you do each week and the type of workouts you prefer.</p>
      </div>

      {/* Workout Frequency */}
      <div className="flex flex-col items-center space-y-4 mb-10">
        <h2 className="text-xl font-semibold mb-4">Workout Frequency</h2>
        <select 
          value={workoutFrequency} 
          onChange={(e) => setWorkoutFrequency(e.target.value)} 
          className="bg-white py-2 px-4 rounded-lg border-2 border-black w-full focus:outline-none focus:ring-2 focus:ring-black"
          style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }} // Hide default appearance
        >
          <option  className="bg-black text-white hover:bg-black" value="" disabled>Select frequency</option>
          <option  className="bg-black text-white hover:bg-black"  value="1-2 times">1-2 times a week</option>
          <option   className="bg-black text-white"  value="3-4 times">3-4 times a week</option>
          <option  className="bg-black text-white"  value="5-6 times">5-6 times a week</option>
          <option  className="bg-black text-white"  value="Every day">Every day</option>
        </select>
      </div>

      {/* Workout Type */}
      <div className="flex flex-col items-center space-y-4 mb-10">
        <h2 className="text-xl font-semibold mb-4">Type of Workouts</h2>
        <div className="flex flex-col items-center space-y-2">
          <button 
            className={`py-3 px-20 rounded-lg border-2 ${workoutType === "Cardio" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => setWorkoutType("Cardio")}
          >
            Cardio
          </button>
          <button 
            className={`py-3 px-[76px] rounded-lg border-2 ${workoutType === "Strength" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => setWorkoutType("Strength")}
          >
            Strength
          </button>
          <button 
            className={`py-3 px-[76px] rounded-lg border-2 ${workoutType === "Flexibility" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => setWorkoutType("Flexibility")}
          >
            Flexibility
          </button>
          <button 
            className={`py-3 px-[90px] rounded-lg border-2 ${workoutType === "Other" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => setWorkoutType("Other")}
          >
            Other
          </button>
        </div>
      </div>

      {/* Next Button */}
      <div className="w-full px-4 mb-20">
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

export default Workout;
