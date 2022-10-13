import React from "react";
import PropTypes from "prop-types";

import { StyledTitle } from "./styles";

const Title = (props) => {
  const { children } = props;

  return <StyledTitle>{children}</StyledTitle>;
};

Title.defaultProps = {};
Title.propTypes = {
  children: PropTypes.any,
};

export { Title };
