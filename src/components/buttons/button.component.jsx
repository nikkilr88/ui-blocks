import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledButton, StyledLinkButton } from "./button.styles.js";

/*

@prop {string} ctaType Sets the type of the call to action. Available options are 'button' and 'link'
@prop {string} linkTo HTML id of element to scroll to or link of page to redirect to when call to action button is clicked
@prop {function} onClick Function to execute when call to action button is clicked
@prop {string} text Text to display on call to action button

*/

const Button = ({ ctaType, linkTo, onClick, text }) => {
  return ctaType === "link" ? (
    <StyledLinkButton href={linkTo}>{text}</StyledLinkButton>
  ) : ctaType === "button" ? (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  ) : null;
};

Button.propTypes = {
  ctaType: PropTypes.string,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
};

export default Button;
