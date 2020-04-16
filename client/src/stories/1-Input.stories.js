import React from 'react';
import LoginInput from '../components/Input';
import ProjectInput from '../components/ProjectInput';

export default {
  title: 'Input',
};

export const MailLogin = (props) => (
  <LoginInput placeholder="E-mail" type="email" {...props} />
);
export const PasswordLogin = (props) => (
  <LoginInput placeholder="Passwort" type="password" {...props} />
);

export const NameInput = () => <ProjectInput placeholder="Projektname" />;
