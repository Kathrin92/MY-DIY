import React from 'react';
import Input from '../components/Input';
import InputLine from '../components/InputLine';
import InputDropdown from '../components/InputDropdown';

export default {
  title: 'Input',
};

export const Default = () => <Input />;

export const NameInput = () => <InputLine placeholder="Name" />;
export const EmailInput = () => <InputLine placeholder="E-mail" type="email" />;
export const ProjectInput = () => <InputLine placeholder="Projektname" />;
export const PasswordInput = () => (
  <InputLine placeholder="Passwort" type="password" />
);

export const ProjectTypeInput = () => (
  <InputDropdown placeholder="Projekttyp" />
);
export const ProjectDayInput = () => (
  <InputDropdown placeholder="Anzahl Projekttage" />
);
export const ProjectStepInput = () => (
  <InputDropdown placeholder="Projektschritte" />
);
