export const addItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map(item =>
      itemToAdd.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );
  if (existingItem.quantity > 1) {
    return cartItems.map(item =>
      itemToRemove.id === item.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  } else {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }
};
