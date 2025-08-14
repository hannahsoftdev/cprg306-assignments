"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await res.json();
  return data.meals || [];
}

async function fetchMealDetails(mealId) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await res.json();
  return data.meals?.[0] || null;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [selectedMealDetails, setSelectedMealDetails] = useState(null);

  useEffect(() => {
    if (ingredient) {
      setSelectedMealId(null);
      setSelectedMealDetails(null);
      fetchMealIdeas(ingredient).then(setMeals);
    }
  }, [ingredient]);

  useEffect(() => {
    if (selectedMealId) {
      fetchMealDetails(selectedMealId).then(setSelectedMealDetails);
    }
  }, [selectedMealId]);

  const renderIngredients = () => {
    if (!selectedMealDetails) return null;
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = selectedMealDetails[`strIngredient${i}`];
      const measure = selectedMealDetails[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }

    return (
      <ul className="list-disc ml-6 mt-2 text-sm text-gray-300">
        {ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
    );
  };

  if (!ingredient) {
    return (
      <div className="text-gray-300">
        <h2 className="text-xl font-bold text-white mb-2">Meal Ideas</h2>
        <p>Select an item to see meal ideas.</p>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-2">Meal Ideas</h2>
      <p className="text-sm text-gray-300 mb-4">
        Here are some meal ideas using <strong>{ingredient}</strong>:
      </p>
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <button
              onClick={() => setSelectedMealId(meal.idMeal)}
              className="text-blue-400 hover:underline"
            >
              {meal.strMeal}
            </button>
            {selectedMealId === meal.idMeal && renderIngredients()}
          </li>
        ))}
      </ul>
    </div>
  );
}
