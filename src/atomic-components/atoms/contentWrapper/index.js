import React from "react";
import PropTypes from "prop-types";

import { StyledContentWrapper } from "./styles";

const ContentWrapper = (props) => {
  const { center, children } = props;

  return (
    <StyledContentWrapper $center={center}>{children}</StyledContentWrapper>
  );
};

ContentWrapper.defaultProps = {
  center: false,
};
ContentWrapper.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.any,
};

export { ContentWrapper };
