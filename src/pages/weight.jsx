import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Weight = () => {
  const navigate = useNavigate();
  const [heightUnit, setHeightUnit] = useState("cm"); // Toggle between 'cm' and 'ft'
  const [weightUnit, setWeightUnit] = useState("kg"); // Toggle between 'kg' and 'lb'
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [weightLb, setWeightLb] = useState("");

  const handleNext = () => {
    let height, weight;
    if (heightUnit === "cm") {
      height = `${heightCm} cm`;
    } else {
      height = `${heightFt} ft ${heightIn} in`;
    }

    if (weightUnit === "kg") {
      weight = `${weightKg} kg`;
    } else {
      weight = `${weightLb} lb`;
    }

    console.log("Height:", height);
    console.log("Weight:", weight);
    navigate('/DOB'); // Navigate to the next page or handle submission
  };

  return (
    <div className="flex flex-col justify-between items-center bg-gray-100 text-black">
      {/* Header */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold mb-8 p-7">Enter Your Height and Weight</h1>
      </div>

      {/* Height Section */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h2 className="text-xl font-semibold mb-2">Height</h2>
        {/* Height Toggle Button */}
        <div className="flex items-center space-x-4">
          <button
            className={`py-2 px-4 rounded-full border-2 ${heightUnit === "cm" ? "bg-black text-white" : "bg-white text-black border-black"}`}
            onClick={() => setHeightUnit("cm")}
          >
            cm
          </button>
          <button
            className={`py-2 px-4 rounded-full border-2 ${heightUnit === "ft" ? "bg-black text-white" : "bg-white text-black border-black"}`}
            onClick={() => setHeightUnit("ft")}
          >
            ft / in
          </button>
        </div>

        {/* Height Input */}
        {heightUnit === "cm" ? (
          <input
            type="number"
            value={heightCm}
            onChange={(e) => setHeightCm(e.target.value)}
            placeholder="Enter height in cm"
            className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        ) : (
          <div className="flex space-x-4">
            <input
              type="number"
              value={heightFt}
              onChange={(e) => setHeightFt(e.target.value)}
              placeholder="ft"
              className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="number"
              value={heightIn}
              onChange={(e) => setHeightIn(e.target.value)}
              placeholder="in"
              className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        )}
      </div>

      {/* Weight Section */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h2 className="text-xl font-semibold mb-2">Weight</h2>
        {/* Weight Toggle Button */}
        <div className="flex items-center space-x-4">
          <button
            className={`py-2 px-4 rounded-full border-2 ${weightUnit === "kg" ? "bg-black text-white" : "bg-white text-black border-black"}`}
            onClick={() => setWeightUnit("kg")}
          >
            kg
          </button>
          <button
            className={`py-2 px-4 rounded-full border-2 ${weightUnit === "lb" ? "bg-black text-white" : "bg-white text-black border-black"}`}
            onClick={() => setWeightUnit("lb")}
          >
            lb
          </button>
        </div>

        {/* Weight Input */}
        {weightUnit === "kg" ? (
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            placeholder="Enter weight in kg"
            className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        ) : (
          <input
            type="number"
            value={weightLb}
            onChange={(e) => setWeightLb(e.target.value)}
            placeholder="Enter weight in lb"
            className="py-2 px-4 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        )}
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

export default Weight;
