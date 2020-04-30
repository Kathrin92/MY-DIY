import React from 'react';
import styled from '@emotion/styled';
import HomeIcon from '../assets/icons/Home';
import ProjectListIcon from '../assets/icons/List';
import CreateIcon from '../assets/icons/Plus';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FooterIcon = styled.button`
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterIcon>
      <ProjectListIcon />
    </FooterIcon>
    <FooterIcon>
      <HomeIcon />
    </FooterIcon>
    <FooterIcon>
      <CreateIcon />
    </FooterIcon>
  </FooterContainer>
);

export default Footer;
