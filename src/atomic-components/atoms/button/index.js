import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

const Button = (props) => {
  const { type, disabled, onClick, children } = props;

  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};
Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export { Button };
