import React from "react";
import PropTypes from "prop-types";
import { FiCoffee, FiGlobe, FiHeadphones } from "react-icons/fi";

// Styles
import {
  StyledGridItem,
  StyledGridWrapper,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledThreeColGrid
} from "./three-col-grid-styles";

/*

  @prop {string} backgroundColor Background color of block component
  @prop {gridItems} array Array of objects with grid items information { icon: String, title: String, description: String }
  @prop {string} subtitle Text that is displayed under heading
  @prop {string} title Text that is displayed as section heading

*/

// TODO: Rename 'title' and 'subtitle' to 'heading' and 'subheading'
const ThreeColGrid = ({ backgroundColor, gridItems, subtitle, title }) => {
  /* 
    !: Create grid items

    User is allowed to pass in an array with a length less than 3. If the array contains more than 3 items, we splice it so only the first 3 get rendered.

  */

  const renderGridItems = () => {
    return gridItems.splice(0, 3).map((gridItem, i) => (
      <StyledGridItem key={gridItem.title + i}>
        {gridItem.icon && (
          <StyledIconWrapper>{gridItem.icon}</StyledIconWrapper>
        )}
        <h3>{gridItem.title}</h3>
        <p>{gridItem.description}</p>
      </StyledGridItem>
    ));
  };

  return (
    <StyledThreeColGrid id="threeColGrid" backgroundColor={backgroundColor}>
      <StyledTextWrapper>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </StyledTextWrapper>
      <StyledGridWrapper>{renderGridItems()}</StyledGridWrapper>
    </StyledThreeColGrid>
  );
};

ThreeColGrid.defaultProps = {
  gridItems: [
    {
      icon: <FiCoffee />,
      title: "Grid Item One",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    },
    {
      icon: <FiGlobe />,
      title: "Grid Item Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    },
    {
      icon: <FiHeadphones />,
      title: "Grid Item Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    }
  ],
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, officia",
  title: "Grid Section Title"
};

ThreeColGrid.propTypes = {
  backgroundColor: PropTypes.string,
  gridItems: PropTypes.array,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default ThreeColGrid;
