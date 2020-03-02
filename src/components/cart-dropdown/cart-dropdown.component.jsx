import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/cumstom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ items, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
