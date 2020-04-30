import React from 'react';
import styled from '@emotion/styled';
import DIY from '../assets/images/MYDIYlogo.png';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import InputCircle from '../components/InputCircle';
import InputContainer from '../components/InputContainer';
import { Link } from 'react-router-dom';

const IMG = styled.img`
  max-width: 350px;
  height: auto;
`;

function Login() {
  return (
    <PageContainer>
      <IMG src={DIY} alt="MY-DIY-logo built with letters and tools" />
      <Header />
      <InputContainer>
        <InputCircle placeholder="E-mail" type="email" />
        <InputCircle placeholder="Passwort" type="password" />
      </InputContainer>
      <ButtonContainer>
        <Button>Lass uns loslegen!</Button>
      </ButtonContainer>
      <textarea>Du hast noch kein Konto? </textarea>
      <Link to="/signup">
        <span>Hier entlang!</span>
      </Link>
    </PageContainer>
  );
}

export default Login;
