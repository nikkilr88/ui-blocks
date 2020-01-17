import styled from "styled-components";
import { device } from "../../media-query-data";
import { secondaryHeading } from "../../shared-styles";

export const StyledImageLeftAboutBlock = styled.section`
  padding: 75px 50px;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    padding: 75px 35px;
  }

  & > * {
    margin: 0 50px;
  }
`;

export const StyledImageWrapper = styled.div`
  height: 300px;
  width: 500px;
  background: #eee;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  order: ${({ imagePosition }) => imagePosition === "right" && 2};

  @media ${device.tablet} {
    order: 2;
    width: 100%;
    margin: 50px 0 0;
  }
`;

export const StyledTextWrapper = styled.div`
  color: #1b1b1b;
  max-width: 500px;

  @media ${device.tablet} {
    margin: 0;
    text-align: center;
  }

  h2 {
    ${secondaryHeading}
    margin: 5px 0 25px;
  }

  h3 {
    color: #bbb;
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  p {
    font-size: 20px;
    font-weight: 100;
  }
`;
