import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const LoginButton = () => (
  <Button onClick={action('clicked')}>Lass uns loslegen!</Button>
);
export const SignUpButton = () => (
  <Button onClick={action('clicked')}>Konto anlegen</Button>
);
export const SaveButton = () => (
  <Button onClick={action('clicked')}>Los geht&#39;s!</Button>
);
