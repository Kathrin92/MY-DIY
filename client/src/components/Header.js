import React from 'react';
import styled from '@emotion/styled';
import DIY from '../assets/images/MYDIYlogoSmall.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
  height: 64px;
  margin: 0px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 10%);
`;

const Title = styled.h1`
  font: 400 2rem 'Roboto';
  letter-spacing: 2px;
  color: #0e0f09;
  margin: 0.8rem;
`;

const IMG = styled.img`
  max-width: 300px;
  height: auto;
  fill: #0e0f09;
`;

function Header() {
  return (
    <Container>
      <IMG src={DIY} alt="MY DIY logo in small" />
      <Title></Title>
    </Container>
  );
}

export default Header;
