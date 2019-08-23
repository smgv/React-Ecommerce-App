import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
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
      CHECKOUT
    </CustomButton>
  </div>
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
