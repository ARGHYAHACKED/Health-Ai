import React from 'react';

const NutritionDetails = ({ foodName, calories, nutrients }) => {
  return (
    <div className="nutrition-details">
      <h3>Nutrition Facts for {foodName}</h3>
      <p>Calories: {calories}</p>
      <ul>
        {nutrients.map((nutrient) => (
          <li key={nutrient.name}>
            {nutrient.name}: {nutrient.amount} {nutrient.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionDetails;
