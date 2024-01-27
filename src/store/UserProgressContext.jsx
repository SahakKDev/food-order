import { createContext, useState } from "react";
import { PROGRESS } from "../util/constants";

export const UserProgressContext = createContext({
  progress: "", // CART, CHECKOUT
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress(PROGRESS.CART);
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress(PROGRESS.CHECKOUT);
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressValue}>
      {children}
    </UserProgressContext.Provider>
  );
}
