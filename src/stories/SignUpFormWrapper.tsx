import React from 'react';
import SignUpForm from '../components/SignUpForm';

interface SignUpFormWrapperProps {
  initialErrors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

const SignUpFormWrapper: React.FC<SignUpFormWrapperProps> = ({ initialErrors }) => {
  return <SignUpForm initialErrors={initialErrors} />;
};

export default SignUpFormWrapper;
