export const addItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id == itemToAdd.id);
  if (existingItem) {
    return cartItems.map(item =>
      itemToAdd.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
