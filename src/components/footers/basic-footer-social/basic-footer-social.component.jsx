import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Styles
import {
  StyledBasicFooterSocial,
  StyledSocialWrapper
} from "./basic-footer-social-styles";

const BasicFooterSocial = ({
  companyName,
  emailAddress,
  facebookLink,
  instagramLink,
  twitterLink
}) => {
  return (
    <StyledBasicFooterSocial>
      <h3>{companyName}</h3>
      <StyledSocialWrapper>
        <a href={facebookLink}>
          <FaFacebook />
        </a>
        <a href={twitterLink}>
          <FaTwitter />
        </a>
        <a href={instagramLink}>
          <FaInstagram />
        </a>
      </StyledSocialWrapper>
      <p>{emailAddress}</p>
    </StyledBasicFooterSocial>
  );
};

BasicFooterSocial.defaultProps = {
  companyName: "Company Name",
  emailAddress: "email@example.com",
  facebookLink: "#",
  instagramLink: "#",
  twitterLink: "#"
};

BasicFooterSocial.propTypes = {
  companyName: PropTypes.string,
  emailAddress: PropTypes.string,
  facebookLink: PropTypes.string,
  instagramLink: PropTypes.string,
  twitterLink: PropTypes.string
};

export default BasicFooterSocial;
