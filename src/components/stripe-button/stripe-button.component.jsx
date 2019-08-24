import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey = "pk_test_t8F79S2AtYZ7UIGHkhBvkzHC008RBfCJ6P";

  const onToken = token => {
    console.log(token);
    alert("PAYMENT SUCCESSFULLY DONE!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ECOM APP LTD."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeCheckoutButton;
