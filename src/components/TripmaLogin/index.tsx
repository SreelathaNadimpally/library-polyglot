import React, { useState } from "react";
import EmailInput from "../Email-Input";
import PasswordInput from '../Password-Input';
import Button  from "../Button";
// import './Login.css';


export interface TripmaLoginProps {
    onLogin: () => void; 
  }
  
  const TripmaLogin: React.FC<TripmaLoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    const handleEmailChange = (value: string) => {
      setEmail(value);
    };
  
    const handlePasswordChange = (value: string) => {
      setPassword(value);
    };
  
    const handleLogin = () => {
      onLogin();
      console.log(`Logging in with email: ${email} and password: ${password}`);
    };
  
  return (
    <div className="login-container">
      <h1>Login to Tripma</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <EmailInput
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            name={"email"}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <PasswordInput
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            name={"password"}
          />
        </div>
        <Button
          type="button"
          onClick={handleLogin}
          size={"small"}
          name={""}
          variant={"default"}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default TripmaLogin;
