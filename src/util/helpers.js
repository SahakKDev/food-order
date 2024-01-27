export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getTotalAmount = (items) => {
  return items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
};
