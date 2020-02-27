import React from "react";
import PropTypes from "prop-types";

// Components
import Button from "../../buttons/button.component.jsx";

// Styles
import { StyledCallToActionButtonSide } from "./call-to-action-button-side.styles";

// TODO: Add id prop
const CallToActionButtonSide = ({ heading, text, ctaText, onClick }) => {
  return (
    <StyledCallToActionButtonSide>
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>

      <button onClick={onClick}>{ctaText}</button>
    </StyledCallToActionButtonSide>
  );
};

CallToActionButtonSide.defaultProps = {
  heading: "Call To Action Block",
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas.",
  ctaText: "Click me"
};

CallToActionButtonSide.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  ctaText: PropTypes.string,
  onClick: PropTypes.func
};

export default CallToActionButtonSide;
