import React from 'react';
import styled from '@emotion/styled';
import DIY from '../assets/images/MYDIYlogoSmall.png';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import InputCircle from '../components/InputCircle';
import InputContainer from '../components/InputContainer';
import PageHeading from '../components/PageHeading';
import { Link } from 'react-router-dom';

const IMG = styled.img`
  max-width: 300px;
  height: auto;
  padding-bottom: 20px;
`;

function Signup() {
  return (
    <PageContainer>
      <Header>
        <IMG src={DIY} alt="MY DIY logo in small" />
      </Header>
      <PageHeading>
        <span>Plane ein DIY Projekt und verfolge deinen Fortschritt</span>
      </PageHeading>
      <InputContainer>
        <InputCircle placeholder="Name" type="text" />
        <InputCircle placeholder="E-mail" type="email" />
        <InputCircle placeholder="Passwort" type="password" />
      </InputContainer>
      <ButtonContainer>
        <Button>Konto anlegen</Button>
      </ButtonContainer>
      <span>Du hast schon ein Konto?</span>
      <span>
        <Link to="/">Hier entlang!</Link>
      </span>
    </PageContainer>
  );
}
export default Signup;
