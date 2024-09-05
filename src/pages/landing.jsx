import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Calorie.png';
const Landing = () => {
  const navigate = useNavigate();

  // Background images and state for controlling them
  const images = [
    "https://images.unsplash.com/photo-1636743714639-9407ec7b4946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTMzOTY5fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1657373373708-ce62be45870b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyNTMzOTY5fHxlbnwwfHx8fHw%3D"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen flex flex-col justify-between items-center bg-black text-white">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={images[currentImage]} 
        alt="Background" 
        className="w-full h-full object-cover opacity-40 transition-opacity duration-1000 ease-in-out" 
      />
    </div>

    <div>
      <img src={ logo } className="h-20 w-20 rounded-b-xl relative top-56" />
    </div>

    {/* App Content */}
    <div className="z-10 flex flex-col items-center mt-16 text-center">
      
      

      {/* Description with Typewriter Effect */}
      <p className="text-gray-300 mt-4 px-6 overflow-hidden whitespace-pre-wrap border-r-4 border-gray-300 typewriter">
        Snap a picture of your food
        <br />
        and let Cal AI instantly calculate the calories for you!
      </p>
    </div>

    {/* Next Button */}
    <div className="z-10 w-full px-4 mb-10">
      <button
        className="w-full bg-white text-black py-3 rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105 active:scale-95"
        onClick={() => navigate('/gender')}
      >
        Next
      </button>
    </div>
  </div>
  );
};

export default Landing;
