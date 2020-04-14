import React from 'react';
import { LoginInput } from '../components/Input';

export default {
  title: 'LoginInput',
};

export const MailLogin = (props) => (
  <LoginInput placeholder="E-mail" type="email" {...props} />
);
export const PasswordLogin = (props) => (
  <LoginInput placeholder="Passwort" type="password" {...props} />
);
export const NameSignUp = (props) => (
  <LoginInput placeholder="Name" type="name" {...props} />
);
export const MailSignUp = (props) => (
  <LoginInput placeholder="＠E-mail" type="email" {...props} />
);
export const PasswordSignUp = (props) => (
  <LoginInput placeholder="Passwort" type="password" {...props} />
);
