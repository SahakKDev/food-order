import useHttp from "../hooks/useHttp";
import { BASE_URL } from "../util/constants";

import MealItem from "./MealItem";
import Error from "./Error";

const config = { method: "GET" };

export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp(`${BASE_URL}/meals`, config, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
