import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = WrrapedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrrapedComponent {...otherProps} />;
};

export default WithSpinner;
