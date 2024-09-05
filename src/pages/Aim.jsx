import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Aim = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState("");

  const handleNext = () => {
    if (selectedGoal === "Lose Weight" || selectedGoal === "Gain Weight") {
      // Navigate to Wanted page if the goal is Lose Weight or Gain Weight
      navigate('/wanted');
    } else if (selectedGoal === "Maintain Physics") {
      // Navigate to Details page if the goal is Maintain Physics
      navigate('/details');
    } else {
      console.log("Please select a goal.");
    }
  };

  return (
    <div className="flex flex-col justify-between items-center bg-gray-100 text-black h-screen">
      {/* Header */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold mb-8">What is Your Goal?</h1>
      </div>

      {/* Goal Selection */}
      <div className="flex flex-col items-center space-y-4 mb-10">
        <h2 className="text-xl font-semibold mb-4">Please select your fitness goal</h2>

        <div className="flex flex-col items-center space-y-4">
          {/* Lose Weight Button */}
          <button
            className={`py-3 px-20 rounded-lg border-2 ${selectedGoal === "Lose Weight" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => setSelectedGoal("Lose Weight")}
          >
            Lose Weight
          </button>

          {/* Gain Weight Button */}
          <button
            className={`py-3 px-20 rounded-lg border-2 ${selectedGoal === "Gain Weight" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => setSelectedGoal("Gain Weight")}
          >
            Gain Weight
          </button>

          {/* Maintain Physics Button */}
          <button
            className={`py-3 px-[60px] rounded-lg border-2 ${selectedGoal === "Maintain Physics" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => setSelectedGoal("Maintain Physics")}
          >
            Maintain Physique
          </button>
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

export default Aim;
