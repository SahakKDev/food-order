import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(`${BASE_URL}/meals`);

      if (!response.ok) {
        // ...
      }

      const meals = await response.json();

      setMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
