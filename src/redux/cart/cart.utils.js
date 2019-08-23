export const addToCartItems = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const findCartItem = cartItems.filter(
    cartItem => cartItem.id !== cartItemToRemove.id
  );

  return [...findCartItem];
};

export const removeFromCart = (cartItems, removeCartItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === removeCartItem.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== removeCartItem.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === removeCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : // True block will give the match id block
        //i.e. {name:"", price:"", id:"3", quantity:2-1}
        cartItem
  );
};
