import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wanted = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(70); // Default weight in kg
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [unit, setUnit] = useState("kg"); // Default unit is kilograms
  const weightRef = useRef(weight);

  // Ref to track animation frame
  const requestRef = useRef(null);

  // Convert kg to lb and vice versa
  const convertWeight = (weightInKg) => {
    return unit === "kg" ? weightInKg : weightInKg * 2.20462;
  };

  // Update weight during dragging process
  const updateWeight = (dragDistance) => {
    const weightChange = Math.round(dragDistance / 10); // Adjust weight sensitivity
    const newWeight = Math.max(30, Math.min(weightRef.current + weightChange, 200));
    setWeight(newWeight);
    weightRef.current = newWeight;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dragDistance = e.clientX - startX;
      setStartX(e.clientX);
      updateWeight(dragDistance); // Update weight as user drags
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current); // Stop animation
    }
  };

  useEffect(() => {
    if (isDragging) {
      const animate = () => {
        requestRef.current = requestAnimationFrame(animate);
      };
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [isDragging]);

  const handleToggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "kg" ? "lb" : "kg"));
  };

  const handleNext = () => {
    console.log("Desired Weight:", convertWeight(weight));
    navigate('/ThisWeek'); // Navigate to the next page or handle submission
  };

  // Calculate scale width based on the weight (min 30kg, max 200kg)
  const scaleWidth = ((weight - 30) / (200 - 30)) * 100; // Calculate as percentage

  return (
    <div className="flex flex-col justify-between items-center bg-gray-100 text-black h-screen">
      {/* Header */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold mb-8">Select Your Desired Weight</h1>
      </div>

      {/* Weight Display and Scale Interaction */}
      <div className="flex flex-col items-center space-y-4 mb-10">
        <h2 className="text-xl font-semibold mb-4">Drag the scale to adjust your desired weight</h2>

        {/* Weight Display */}
        <div className="text-6xl font-bold mb-6">{convertWeight(weight).toFixed(2)} {unit}</div>

        {/* Scale Interaction Area */}
        <div
          className="w-full h-20 bg-gray-300 rounded-lg relative cursor-pointer overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Animated Scale Bar */}
          <div
            className="h-full bg-black transition-all duration-200 ease-out"
            style={{ width: `${scaleWidth}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">Drag left or right to decrease or increase weight</p>

        {/* Unit Toggle Button */}
        <button
          className="mt-6 py-2 px-4 bg-black text-white rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105 active:scale-95"
          onClick={handleToggleUnit}
        >
          Switch to {unit === "kg" ? "lb" : "kg"}
        </button>
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

export default Wanted;
