import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  StyledImageLeftAboutBlock,
  StyledImageWrapper,
  StyledTextWrapper
} from "./image-left-about-block.styles";

// TODO: Add id prop
const ImageSideAboutBlock = ({
  heading,
  headingSmall,
  text,
  image,
  imagePosition
}) => {
  return (
    <StyledImageLeftAboutBlock>
      <StyledImageWrapper image={image} imagePosition={imagePosition} />
      <StyledTextWrapper>
        {headingSmall && <h3>{headingSmall}</h3>}
        <h2>{heading}</h2>
        <p>{text}</p>
      </StyledTextWrapper>
    </StyledImageLeftAboutBlock>
  );
};

ImageSideAboutBlock.defaultProps = {
  heading: "About Us Block",
  text:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit beatae laboriosam eius voluptates commodi labore quis autem cum,necessitatibus saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minima?",
  imagePosition: "left"
};

ImageSideAboutBlock.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.string
};

export default ImageSideAboutBlock;
