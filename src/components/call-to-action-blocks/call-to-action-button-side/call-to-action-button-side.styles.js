import styled from "styled-components";
import { device } from "../../../media-query-data";

import { secondaryHeading, button } from "../../../shared-styles";

export const StyledCallToActionButtonSide = styled.section`
  display: flex;
  padding: 50px 100px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #2980b9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%235eaee3' fill-opacity='0.25'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 75px 25px;
  }

  h2 {
    ${secondaryHeading}
    margin: 0;
  }

  p {
    font-size: 18px;
    font-weight: 100;
    margin-top: 10px;
  }

  button {
    ${button}
    background: #ecf0f1;
    color: #2980b9;

    @media ${device.tablet} {
      margin-top: 25px;
    }
  }
`;
