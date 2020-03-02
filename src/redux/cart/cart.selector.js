import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartItemCount = createSelector([selectCartItems], items =>
  items.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], items =>
  items.reduce((sum, item) => sum + item.quantity * item.price, 0)
);

export const selectHidden = createSelector([selectCart], cart => cart.hidden);
