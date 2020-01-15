import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  StyledCenteredTextBlock,
  StyledTextWrapper
} from "./centered-text-block.styles.js";

const CenteredTextBlock = ({ backgroundColor, text, title, showHr }) => {
  return (
    <StyledCenteredTextBlock
      backgroundColor={backgroundColor}
      id="centeredTextBlock"
    >
      <StyledTextWrapper>
        <h2>{title}</h2>
        <p>{text}</p>
        {showHr && <hr />}
      </StyledTextWrapper>
    </StyledCenteredTextBlock>
  );
};

CenteredTextBlock.defaultProps = {
  showHr: true,
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga autem incidunt mollitia dignissimos eveniet saepe quidem illo ipsum quaerat. Aliquid!",
  title: "Centered Text Block"
};

CenteredTextBlock.proptypes = {
  backgroundColor: PropTypes.string,
  showHr: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string
};

export default CenteredTextBlock;
