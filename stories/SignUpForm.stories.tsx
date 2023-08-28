import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUpForm from '../src/components/SignUpForm';
import '../SignUpForm.css';


storiesOf('SignUpForm', module)
  .add('default', () => (
    <SignUpForm errors={{}} />
  ))
  .add('with errors', () => (
    <SignUpForm
      errors={{
        firstName: 'First name is required',
        lastName: 'Last name is required',
        email: 'Email is required',
        password: 'Password is required',
      }}
    />
  ));

