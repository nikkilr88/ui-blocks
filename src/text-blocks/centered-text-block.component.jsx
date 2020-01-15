import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledCenteredTextBlock } from "./centered-text-block.styles.js";

const CenteredTextBlock = ({ title, text, backgroundColor }) => {
  return (
    <StyledCenteredTextBlock backgroundColor={backgroundColor}>
      <div className="section-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <hr />
      </div>
    </StyledCenteredTextBlock>
  );
};

CenteredTextBlock.defaultProps = {
  title: "Centered Text Block",
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga autem incidunt mollitia dignissimos eveniet saepe quidem illo ipsum quaerat. Aliquid!",
  backgroundColor: null
};

CenteredTextBlock.proptypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default CenteredTextBlock;
