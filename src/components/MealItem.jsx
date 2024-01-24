import { BASE_URL } from "../constants";
import { currencyFormatter } from "../util/formatting";

export default function MealItem({ meal }) {
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
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}