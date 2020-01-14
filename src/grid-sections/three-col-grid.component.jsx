import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledThreeColGrid } from "./three-col-grid-styles";

const ThreeColGrid = ({ title, subtitle, gridItems }) => {
  // Create grid items
  const renderGridItems = () => {
    return gridItems.splice(0, 3).map((gridItem, i) => (
      <div className="grid-item" key={gridItem.title + i}>
        <div>
          <h3>{gridItem.title}</h3>
          <p>{gridItem.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <StyledThreeColGrid>
      <div className="section-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="grid">{renderGridItems()}</div>
    </StyledThreeColGrid>
  );
};

ThreeColGrid.defaultProps = {
  title: "Grid Section Title",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, officia",
  gridItems: [
    {
      icon: undefined,
      title: "Grid Item One",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    },
    {
      icon: undefined,
      title: "Grid Item Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    },
    {
      icon: undefined,
      title: "Grid Item Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    }
  ]
};

ThreeColGrid.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  gridItems: PropTypes.array
};

export default ThreeColGrid;
