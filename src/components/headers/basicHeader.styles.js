import styled, { css } from "styled-components";
import { device } from "../../media-query-data";
import { primaryHeading } from "../../shared-styles";

// !: SECTION STYLES
export const StyledBasicHeader = styled.header`
  background: #2b2b2b;
  color: #2b2b2b;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: ${({ textAlignment }) =>
    textAlignment === "center" ? `center` : `flex-start`};
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${backgroundImage});
      background-size: cover;
    `}
`;

// !: TEXT STYLES
export const StyledTextWrapper = styled.div`
  color: #fff;
  padding-left: ${({ textAlignment }) =>
    textAlignment === "center" ? `0` : `75px`};
  text-align: ${({ textAlignment }) =>
    textAlignment === "center" ? `center` : `left`};

  @media ${device.tablet} {
    padding: 0 45px;
  }

  h1 {
    ${primaryHeading}
    margin: 8px 0 16px;
  }

  p {
    font-size: 22px;
    margin: 8px 0;
    max-width: 600px;
    line-height: 1.5;
    font-weight: 100;
    font-family: "Lato";
    opacity: 0.75;
  }
`;

// !: CALL TO ACTION WRAPPER STYLES
export const StyledCtaWrapper = styled.div`
  margin-top: 35px;
`;
