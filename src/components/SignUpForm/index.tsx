import React, { useState, ChangeEvent } from 'react';
import EmailInput from '../Email-Input';
import PasswordInput from '../Password-Input';
import Button from '../Button';
import RadioInput from '../RadioInput';
import TextInput from '../Text-Input';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


const SignUpForm: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('male');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

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


const handleRadioChange: (value: string) => void = (value) => {
  setSelectedValue(value);
};

  const handleEmailInputChangeWrapper = (value: string) => {
    handleEmailInputChange(value);
  };

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
      // There are errors, update the errors state
      setErrors(newErrors);
    } else {
      // No errors, proceed to next page
      setErrors({});
    }
  };

  return (
    <>
      <div className="sign-up-form">
        <h1>Sign-Up</h1>
        <h2>Welcome! First things first...</h2>
        <h3>Please enter your details</h3>
        <form>
          <div>
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
              <br />
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
              <br />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="emailandpswd">
              <EmailInput
                name="email"
                value={formData.email}
                onChange={handleEmailInputChangeWrapper}
                required
                placeholder="E-mail"
                className="email-input"
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <PasswordInput
                name="password"
                value={formData.password}
                onChange={handlePasswordInputChange}
                required
                placeholder="Password"
                className="password-input"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
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
          <br />
          <Button
            type="button"
            variant="warning"
            size="small"
            name=""
            onClick={handleContinueClick}
          >
            Continue
          </Button>
          <br />
          <p className="policy-text">
            By logging in or signing up, you agree to abide by our policies,
            including our <a href="/terms">Terms of Use</a> and{' '}
            <a href="/privacy">Privacy Policy</a>
          </p>
          <br />
          <p className="login-text">Have an account?</p>
          <a className="login" href="/login">
            Login
          </a>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
