
import React from 'react';
import SignUpForm from '../src/components/SignUpForm';
interface SignUpFormWrapperProps {
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

const SignUpFormWrapper: React.FC<SignUpFormWrapperProps> = ({ errors }) => {
  return <SignUpForm errors={errors} />;
};

export default SignUpFormWrapper;
