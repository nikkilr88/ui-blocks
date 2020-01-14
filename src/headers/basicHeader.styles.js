import styled from "styled-components";
import { device } from "../media-query-data";

export const StyledBasicHeader = styled.header`
  background: #2b2b2b;
  color: #2b2b2b;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: ${({ textAlignment }) =>
    textAlignment === "center" ? `center` : `flex-start`};

  .header-text {
    padding-left: 75px;
    color: #eee;
    text-align: ${({ textAlignment }) =>
      textAlignment === "center" ? `center` : `left`};

    @media ${device.tablet} {
      padding: 0 45px;
    }

    h1 {
      font-size: 48px;
      margin: 8px 0 16px;
      font-family: "Ubuntu";
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
  }
`;
