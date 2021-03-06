import styled from "styled-components";
import { device } from "../../media-query-data";
import { textBlock, secondaryHeading } from "../../shared-styles";

// !: SECTION STYLES
export const StyledThreeColGrid = styled.section`
  padding: 75px 50px;
  text-align: center;
  color: #1b1b1b;
  background: ${({ backgroundColor }) => backgroundColor};

  @media ${device.tablet} {
    padding: 75px 25px;
  }
`;

// !: TEXT STYLES
export const StyledTextWrapper = styled.div`
  ${textBlock}
  margin: 0 auto 100px;

  @media ${device.tablet} {
    margin-bottom: 35px;
  }

  h2 {
    ${secondaryHeading}
    margin: 8px 0 16px;
  }

  p {
    font-size: 20px;
    font-weight: 100;
  }
`;

// !: GRID STYLES
export const StyledGridWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

// !: GRID ITEM STYLES
export const StyledGridItem = styled.div`
  padding: 0 10px;
  max-width: 350px;

  @media ${device.tablet} {
    padding: 35px 0;

    &:last-child {
      padding-bottom: 0;
    }
  }

  h3 {
    font-size: 20px;
    margin-bottom: 0;
    font-family: "Ubuntu";
  }

  p {
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 0;

    @media ${device.tablet} {
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;

// !: ICON STYLES
export const StyledIconWrapper = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 50px;
  background: #2980b9;
  color: #fff;
  font-size: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
