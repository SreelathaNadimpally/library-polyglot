import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUpFormWrapper from './SignUpFormWrapper';

const defaultErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const errorsWithMessages = {
  firstName: 'First name is required',
  lastName: 'Last name is required',
  email: 'Email is required',
  password: 'Password is required',
};

storiesOf('SignUpForm', module)
  .add('default', () => <SignUpFormWrapper errors={defaultErrors} />)
  .add('with errors', () => <SignUpFormWrapper errors={errorsWithMessages} />);
