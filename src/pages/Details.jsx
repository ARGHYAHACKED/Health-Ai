import React from 'react';

const Details = () => {
  // Sample data for the circles
  const fitnessInfo = [
    { label: 'BMI', value: '22.5' },
    { label: 'Body Fat %', value: '18%' },
    { label: 'Muscle Mass', value: '60kg' },
    { label: 'Water %', value: '55%' }
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 text-black h-screen p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Fitness Details</h1>
        <p className="text-xl font-medium">Here is your detailed fitness information</p>
      </div>

      {/* Fitness Information Circles */}
      <div className="flex flex-wrap justify-center gap-8">
        {fitnessInfo.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white border-2 border-black rounded-full w-24 h-24 md:w-32 md:h-32 shadow-lg"
          >
            <div className="text-2xl font-bold mb-2">{info.value}</div>
            <div className="text-sm font-medium">{info.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
