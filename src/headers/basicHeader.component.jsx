import React from "react";
import PropTypes from "prop-types";

// Components
import Button from "../buttons/button.component.jsx";

// Styles
import { StyledBasicHeader } from "./basicHeader.styles";

/*

  @prop {string} backgroundImage Image that is displayed as background image of header
  @prop {string} ctaLinkTo HTML id of element to scroll to or link of page to redirect to when call to action button is clicked
  @prop {function} ctaOnClick Function to execute when call to action button is clicked
  @prop {string} ctaText Text to display on call to action button
  @prop {string} ctaType Sets the type of the call to action. Available options are 'button' and 'link'
  @prop {string} heading The text to be displayed as the heading of the header block component
  @prop {boolean} showCta Determines if call to action button is displayed or not
  @prop {string} subheading The text to be displayed as the subheading of the header block component 
  @prop {string} textAlignment Sets the header text aligenment. Available options are 'left' and 'center'

*/

const BasicHeader = ({
  backgroundImage,
  ctaLinkTo,
  ctaOnClick,
  ctaText,
  ctaType,
  heading,
  showCta,
  subheading,
  textAlignment
}) => (
  <StyledBasicHeader
    backgroundImage={backgroundImage}
    id="basicHeader"
    textAlignment={textAlignment}
  >
    <div className="header-text">
      <h1>{heading}</h1>
      <p>{subheading}</p>
      {showCta && (
        <div className="cta-wrapper">
          <Button
            ctaType={ctaType}
            linkTo={ctaLinkTo}
            onClick={ctaOnClick}
            text={ctaText}
          />
        </div>
      )}
    </div>
  </StyledBasicHeader>
);

BasicHeader.defaultProps = {
  ctaText: "Call to action",
  ctaType: "button",
  heading: "Awesome Header Heading",
  showCta: true,
  subheading:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam recusandae corrupti, nulla quas reiciendis architecto quo harum corporis enim?",
  textAlignment: "center"
};

BasicHeader.propTypes = {
  backgroundImage: PropTypes.string,
  ctaLinkTo: PropTypes.string,
  ctaOnClick: PropTypes.func,
  ctaText: PropTypes.string,
  ctaType: PropTypes.string,
  heading: PropTypes.string,
  showCta: PropTypes.bool,
  subheading: PropTypes.string,
  textAlignment: PropTypes.string
};

export default BasicHeader;
