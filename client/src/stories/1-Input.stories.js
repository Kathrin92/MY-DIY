import React from 'react';
import { Input } from '../components/Input';

export default {
  title: 'LoginInput',
};

export const MailLogin = () => <Input placeholder="E-mail" type="email" />;
export const PasswordLogin = () => (
  <Input placeholder="Passwort" type="password" />
);
export const NameSignUp = () => <Input placeholder="Name" type="name" />;
export const MailSignUp = () => <Input placeholder="＠E-mail" type="email" />;
export const PasswordSignUp = () => (
  <Input placeholder="Passwort" type="password" />
);
