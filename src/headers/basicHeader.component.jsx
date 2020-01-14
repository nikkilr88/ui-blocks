import React from "react";

// Styles
import { StyledBasicHeader } from "./basicHeader.styles";

const BasicHeader = ({ heading, subheading, textAlignment }) => (
  <StyledBasicHeader textAlignment={textAlignment}>
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
  textAlignment: "center"
};

export default BasicHeader;
