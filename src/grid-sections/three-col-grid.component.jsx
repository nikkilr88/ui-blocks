import React from "react";
import PropTypes from "prop-types";
// import { FiCoffee, FiGlobe, FiHeadphones } from "react-icons/fi";

// Styles
import { StyledThreeColGrid } from "./three-col-grid-styles";

const ThreeColGrid = ({ title, subtitle, gridItems, backgroundColor }) => {
  // Create grid items
  const renderGridItems = () => {
    return gridItems.splice(0, 3).map((gridItem, i) => (
      <div className="grid-item" key={gridItem.title + i}>
        <div>
          {gridItem.icon && <i className="icon">{gridItem.icon}</i>}
          <h3>{gridItem.title}</h3>
          <p>{gridItem.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <StyledThreeColGrid backgroundColor={backgroundColor}>
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
      // icon: <FiCoffee />,
      title: "Grid Item One",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    },
    {
      // icon: <FiGlobe />,
      title: "Grid Item Two",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    },
    {
      // icon: <FiHeadphones />,
      title: "Grid Item Three",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, in."
    }
  ],
  backgroundColor: null
};

ThreeColGrid.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  gridItems: PropTypes.array,
  backgroundColor: PropTypes.string
};

export default ThreeColGrid;
