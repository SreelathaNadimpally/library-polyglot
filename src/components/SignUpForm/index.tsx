import React, { useState, ChangeEvent } from 'react';
import Button from '../Button';
import TextInput from '../Text-Input';
import EmailInput from '../Email-Input';
import PasswordInput from '../Password-Input';
import RadioInput from '../RadioInput';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignUpFormProps {
  initialErrors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

const SignUpForm: React.FC<SignUpFormProps> = ({ initialErrors  }) => {
  const [selectedValue, setSelectedValue] = useState<string>('male');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors] = useState(initialErrors);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmailInputChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      email: value,
    }));
  };

  const handlePasswordInputChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      password: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleEmailInputChangeWrapper = (value: string) => {
    handleEmailInputChange(value);
  };

  function onErrorsChange(_arg0: {}) {
    throw new Error('Function not implemented.');
  }
  
 const handleContinueClick = () => {
  const newErrors: Partial<FormData> = {};
  // Validate form data
  if (formData.firstName.trim() === '') {
    newErrors.firstName = 'First name is required';
  }
  if (formData.lastName.trim() === '') {
    newErrors.lastName = 'Last name is required';
  }
  if (formData.email.trim() === '') {
    newErrors.email = 'Email is required';
  }
  if (formData.password.trim() === '') {
    newErrors.password = 'Password is required';
  }

  if (Object.keys(newErrors).length > 0) {
    // There are errors, update the errors prop (not state)
    // This will pass the errors back to the parent component
    onErrorsChange(newErrors);
  } else {
    // No errors, clear the errors prop
    onErrorsChange({});
  }
};


  return (
    <>
      <div className="sign-up-form">
        <h1>Sign-Up</h1>
        <h2>Welcome! First things first...</h2>
        <h3>Please enter your details</h3>
        <form>
          <div className="name-container">
            <TextInput
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              type="text"
              required
              placeholder="First name"
              className="name-input"
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <TextInput
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              type="text"
              required
              placeholder="Last name"
              className="name-input"
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="emailandpswd">
            <EmailInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleEmailInputChangeWrapper}
              required
              placeholder="E-mail"
              className="email-input"
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handlePasswordInputChange}
              required
              placeholder="Password"
              className="password-input"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="radio-container">
            <RadioInput
              label="Male"
              value="male"
              name="gender"
              checked={selectedValue === 'male'}
              onChange={handleRadioChange}
            />
            <RadioInput
              label="Female"
              value="female"
              name="gender"
              checked={selectedValue === 'female'}
              onChange={handleRadioChange}
            />
            <RadioInput
              label="Others"
              value="others"
              name="gender"
              checked={selectedValue === 'others'}
              onChange={handleRadioChange}
            />
          </div>
          <Button
            type="button"
            variant="warning"
            size="small"
            name=""
            onClick={handleContinueClick}
          >
            Continue
          </Button>
          <div className="policy-text">
            By logging in or signing up, you agree to abide by our policies,
            including our <a href="/terms">Terms of Use</a> and{' '}
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="login-text">Have an account?</div>
          <a className="login" href="/login">
            Login
          </a>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;

