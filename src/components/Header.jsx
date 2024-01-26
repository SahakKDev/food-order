import { useContext } from "react";

import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

import logo from "../assets/logo.jpg";

export default function Header() {
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restaurant" />
        <h1>FoodOrder</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
