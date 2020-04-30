import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Title = styled.h1`
  font: 400 2rem 'Roboto';
  letter-spacing: 2px;
  color: #0e0f09;
  margin: 0.8rem;
`;

const SVG = styled.svg`
  fill: #0e0f09;
`;

function Header() {
  return (
    <Container>
      <SVG>XY</SVG>
      <Title>MY DIY</Title>
    </Container>
  );
}

export default Header;
