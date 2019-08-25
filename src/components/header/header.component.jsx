import React from "react";
import { connect } from "react-redux"; // HOC
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

//import "./header.styles.scss";

import {
  HeaderContainer,
  LogoConatiner,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoConatiner to="/">
      <Logo className="logo" />
    </LogoConatiner>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

// Destructing State
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
//   console.log(hidden);
//   return {
//     currentUser,
//     hidden
//   };
// };

// Explanation in cart-icon componnet
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
