import React from 'react';
import styled from '@emotion/styled';
import HomeIcon from '../assets/icons/Icon-shoppingbag.svg';
import ProjectListIcon from '../assets/icons/Icon-projectlist.svg';
import CreateIcon from '../assets/icons/Icon-plus-circle.svg';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FooterIcon = styled.input`
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterIcon
      type="image"
      src={ProjectListIcon}
      alt="icon which represents a clipboard"
    />
    <FooterIcon
      type="image"
      src={HomeIcon}
      alt="icon which represents a house"
    />
    <FooterIcon
      type="image"
      src={CreateIcon}
      alt="icon which represents a plus sign"
    />
  </FooterContainer>
);

export default Footer;
