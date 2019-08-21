import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...buttonProps }) => (
  <button
    className={`${
      buttonProps.isGoogleSignIn ? "google-button" : ""
    } custom-button`}
    {...buttonProps}
  >
    {children}
  </button>
);

export default CustomButton;
