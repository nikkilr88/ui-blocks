import styled, { css } from "styled-components";

const buttonStyles = css`
  padding: 14px 28px;
  background: #2980b9;
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  font-weight: normal;
  font-family: "Lato";
`;

export const StyledButton = styled.button`
  ${buttonStyles}
  border: none;
`;

export const StyledLinkButton = styled.a`
  ${buttonStyles}
  text-decoration: none;
  display: inline-block;
`;
