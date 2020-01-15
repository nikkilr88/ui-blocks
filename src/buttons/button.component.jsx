import React from "react";

// Styles
import { StyledButton, StyledLinkButton } from "./button.styles.js";

const Button = ({ ctaType, linkTo, onClick, text }) => {
  return ctaType === "link" ? (
    <StyledLinkButton href={linkTo}>{text}</StyledLinkButton>
  ) : ctaType === "button" ? (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  ) : null;
};

Button.defaultProps = {
  ctaType: "button",
  text: "Button"
};

export default Button;
