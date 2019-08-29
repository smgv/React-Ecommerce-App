import React from "react";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from "./cart-dropdown.styles";

// import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

// First Code Replaced this code with below code Explanation in:Cart-icon componnet
// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems   // state => cart => cartItems
// It goto state(store) to get the cart state object from that it get the cartItems object.
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

// When second parameteri.e mapDispatchToProps is not passed to the connect then
// connect gives dispatch as the props to the component.
