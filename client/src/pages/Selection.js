import React from 'react';
import InputCircle from '../components/InputCircle';
import InputLine from '../components/InputLine';
import InputContainer from '../components/InputContainer';
import InputHeading from '../components/InputHeading';
import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import Form from '../components/Form';
import PageContainer from '../components/PageContainer';

function Selection() {
  return (
    <PageContainer>
      <Header />
      <PageHeading>Dein neues Projekt</PageHeading>
      <Form>
        <InputContainer>
          <InputHeading>Project Name</InputHeading>
          <InputLine type="text" placeholder="Projektname" />
        </InputContainer>
        <InputContainer>
          <InputHeading>Project Type</InputHeading>
          <InputCircle type="text" placeholder="Projekttyp" />
        </InputContainer>
        <InputContainer>
          <InputHeading>Project Days</InputHeading>
          <InputCircle type="text" placeholder="Projekttage" />
        </InputContainer>
        <InputContainer>
          <InputHeading>Project Steps</InputHeading>
          <InputLine type="text" placeholder="Projektschritte" />
        </InputContainer>
      </Form>
      <ButtonContainer>
        <Button>Los geht&#39;s!</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Selection;
