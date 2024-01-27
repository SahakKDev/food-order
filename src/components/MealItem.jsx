import { useContext } from "react";

import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

import { currencyFormatter } from "../util/helpers";
import { BASE_URL } from "../util/constants";

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  function handleAddMealToCart() {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`${BASE_URL}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
