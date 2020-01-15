import styled, { css } from "styled-components";

// !: SHARED STYLES
const buttonStyles = css`
  padding: 14px 28px;
  background: #2980b9;
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  font-weight: normal;
  font-family: "Lato";
`;

// !: REGULAR BUTTON STYLES
export const StyledButton = styled.button`
  ${buttonStyles}
  border: none;
`;

// !: LINK BUTTON STYLES
export const StyledLinkButton = styled.a`
  ${buttonStyles}
  text-decoration: none;
  display: inline-block;
`;
