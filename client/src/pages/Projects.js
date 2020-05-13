import React from 'react';
//import InputCircle from '../components/InputCircle';
import InputLine from '../components/InputLine';
import InputContainer from '../components/InputContainer';
import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import Form from '../components/Form';
import Wrapper from '../components/Wrapper';
import PageContainer from '../components/PageContainer';
import SelectField from '../components/SelectField';

function Projects() {
  return (
    <PageContainer>
      <Wrapper>
        <Header />
        <PageHeading>Dein neues Projekt</PageHeading>
      </Wrapper>
      <Form>
        <InputContainer>
          <InputLine type="text" placeholder="Projektname" />
        </InputContainer>
        <InputContainer>
          <SelectField type="text" placeholder="Projekttyp" />
        </InputContainer>
        <InputContainer>
          <InputLine type="text" placeholder="Projekttage" />
        </InputContainer>
        <InputContainer>
          <InputLine type="text" placeholder="Projektschritte" />
        </InputContainer>
      </Form>
      <ButtonContainer>
        <Button>Los geht&#39;s!</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Projects;
