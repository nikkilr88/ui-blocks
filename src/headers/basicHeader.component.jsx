import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledBasicHeader } from "./basicHeader.styles";

const BasicHeader = ({
  heading,
  subheading,
  textAlignment,
  backgroundImage
}) => (
  <StyledBasicHeader
    textAlignment={textAlignment}
    backgroundImage={backgroundImage}
  >
    <div className="header-text">
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </div>
  </StyledBasicHeader>
);

BasicHeader.defaultProps = {
  heading: "Awesome Header Heading",
  subheading:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam recusandae corrupti, nulla quas reiciendis architecto quo harum corporis enim?",
  textAlignment: "center",
  backgroundImage: null
};

BasicHeader.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  textAlignment: PropTypes.string,
  backgroundImage: PropTypes.string
};

export default BasicHeader;
