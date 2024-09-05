import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Gender = () => {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState("");

  const handleSelection = (gender) => {
    setSelectedGender(gender);
    console.log("Selected Gender:", gender);
  };

  const handleNext = () => {
    if (selectedGender) {
      navigate('/workout'); // Navigate to the next page or handle submission
    } else {
      console.log("Please select a gender.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-white text-black">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold mb-8">Select Your Gender</h1>
        <div className="flex flex-col items-center space-y-4">
          <button 
            className={`py-3 px-28 rounded-lg border-2 ${selectedGender === "Male" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => handleSelection("Male")}
          >
            Male
          </button>
          <button 
            className={`py-3 px-24 rounded-lg border-2 ${selectedGender === "Female" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => handleSelection("Female")}
          >
            Female
          </button>
          <button 
            className={`py-3 px-24 rounded-lg border-2 ${selectedGender === "Other" ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
            onClick={() => handleSelection("Other")}
          >
            Other
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

export default Gender;
