import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

// import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

// My Code It only gives the unique count
// const mapStateToProps = state => ({
//   count: state.cart.cartItems.length
// });

// Using Destructing of State and using Reduce
// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return {
//     itemCount: cartItems.reduce(
//       (accumulatedQuantity, cartItem) =>
//         accumulatedQuantity + cartItem.quantity,
//       0
//     )
//   };
// };

// Using Selectors It is replaced with above code because
// Whenever their will be change in another state also this is called
// Fo Eg. Even if currentUser state changes this method is called
// Using Selector it will be called when their is a change in it i.e. memoization

// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// });

// User Structured Selector becasue in future if we have a more than one selectors
// than we can use this.
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
