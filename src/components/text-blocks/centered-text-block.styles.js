import styled from "styled-components";
import { device } from "../../media-query-data";
import { textBlock, secondaryHeading } from "../../shared-styles";

// !: SECTION STYLES
export const StyledCenteredTextBlock = styled.section`
  padding: 75px 50px;
  text-align: center;
  color: #2b2b2b;
  background: ${({ backgroundColor }) => backgroundColor};

  @media ${device.tablet} {
    padding: 75px 25px;
  }
`;

// !: TEXT STYLES
export const StyledTextWrapper = styled.div`
  ${textBlock}

  h2 {
    ${secondaryHeading}
    margin: 8px 0 16px;
  }

  p {
    font-size: 22px;
    font-weight: 100;
  }

  hr {
    max-width: 200px;
    width: 50%;
    margin: 50px auto 0 auto;
    border: 1px solid #2980b9;
  }
`;
