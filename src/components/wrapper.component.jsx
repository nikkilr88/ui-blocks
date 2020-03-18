import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledWrapper } from "./wrapper.styles.js";

/*

  @prop {string} backgroundColor Background color of wrapper
  @prop {string} id ID attribute to be assigned to wrapper

*/

const Wrapper = ({ children, backgroundColor, id }) => {
  return (
    <StyledWrapper id={id} backgroundColor={backgroundColor}>
      {children}
    </StyledWrapper>
  );
};

Wrapper.defaultProps = {
  id: null,
  backgroundColor: "transparent"
};

Wrapper.propTypes = {
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Wrapper;
