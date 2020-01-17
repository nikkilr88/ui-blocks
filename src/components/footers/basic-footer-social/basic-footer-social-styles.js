import styled from "styled-components";
import { devices, device } from "../../../media-query-data";

export const StyledBasicFooterSocial = styled.footer`
  padding: 50px;
  background: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999;
  font-size: 18px;

  @media ${device.tablet} {
    flex-direction: column;
  }

  h3 {
    font-size: 18px;
  }

  & > * {
    margin: 0;
  }
`;

export const StyledSocialWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.tablet} {
    position: relative;
    transform: none;
    left: 0;
    margin: 30px 0 25px 0;
  }

  a {
    margin: 0 25px;
    color: #fff;
  }
`;
