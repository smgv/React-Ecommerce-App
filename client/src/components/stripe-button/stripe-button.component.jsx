import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey = "pk_test_t8F79S2AtYZ7UIGHkhBvkzHC008RBfCJ6P";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log(error);
        alert(
          "There is an issue with your payment. Please sure you use the provided card."
        );
      });
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
