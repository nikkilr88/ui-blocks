import styled from "styled-components";
import { device } from "../media-query-data";

// !: WRAPPER STYLES
export const StyledWrapper = styled.div`
  padding: 75px 50px;
  background: ${({ backgroundColor }) => backgroundColor};

  @media ${device.tablet} {
    padding: 75px 25px;
  }

  & > * {
    padding: 0 0 150px;

    &:last-child {
      padding: 0;
    }

    @media ${device.tablet} {
      padding: 0 0 75px;
    }
  }
`;
