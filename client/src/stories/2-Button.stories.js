import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import Button2 from '../components/Button2';

export default {
  title: 'Button',
};

export const LoginButton = () => (
  <Button onClick={action('clicked')}>Lass uns loslegen!</Button>
);
export const SignUpButton = () => (
  <Button onClick={action('clicked')}>Konto anlegen</Button>
);
export const CreateButton = () => (
  <Button2 onClick={action('clicked')}>Los geht&#39;s!</Button2>
);
