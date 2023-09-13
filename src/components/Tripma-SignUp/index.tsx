import React, { useState } from "react";
import Button from '../Button';
import EmailInput from '../Email-Input';
import PasswordInput from '../Password-Input';
import GoogleIconSVG from "../Icons/GoogleIcon/Index";
import FacebookIconSVG from "../Icons/FacebookIcon";
import AppleIconSvg from "../Icons/AppleIcon/Index";
import CloseIcon from "../Icons/CloseIcon/index";
import CheckboxInput from "../CheckBox-Input";



export interface SignUpProps {
  onSignUp: (
    emailOrPhone: string,
    password: string,
    agreeToTerms: boolean,
    sendDealAlerts: boolean
  ) => void;
  
}

const TripmaSignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [sendDealAlerts, setSendDealAlerts] = useState(false);

  const handleSignUp = () => {
    // You can add form validation here if needed
    if (!emailOrPhone || !password) {
      alert("Please fill in all fields.");
      return;
    }
    onSignUp(emailOrPhone, password, agreeToTerms, sendDealAlerts);
  };

  const handleSocialLogin = (provider: string) => {
    alert(`Continue with ${provider}`);
  };

  return (
    <div className="signup-container">
       <div className="header">
    <div className="header-content">
      <h2>Sign Up for Tripma</h2>
      <CloseIcon className="CheckIcon"/>
    </div>
    <div className="header-content">
      <br /> 
      <h3>
        Tripma is totally free to use. Sign up using your email address or
        phone number below to get started.
      </h3>
    </div>
  </div>
      <EmailInput
        name="emailOrPhone"
        placeholder="Email or phone number"
        value={emailOrPhone}
        onChange={(e: React.SetStateAction<string>) => setEmailOrPhone(e)}
      />
      <br />
      <PasswordInput
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.SetStateAction<string>) => setPassword(e)}
      />
      <br />
      <div>
        <label>
          <CheckboxInput
            name="agreeToTerms"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <span>
            I agree to the{" "}
            <a href="/terms" className="terms-link">
              terms and conditions
            </a>
          </span>
        </label>
        <br />
        <label>
          <CheckboxInput
            name="sendDealAlerts"
            checked={sendDealAlerts}
            onChange={() => setSendDealAlerts(!sendDealAlerts)}
          />
          Send me the latest deal alerts
        </label>
      </div>
      <br />
      <Button
        className="signup-button"
        onClick={handleSignUp}
        size={"small"}
        name={""}
        variant={"warning"}
      >
        Create account
      </Button>
      <div>
        <p>or</p>

        <div className="social-buttons">
          <div className="btn">
            <Button
              className="social-button"
              onClick={() => handleSocialLogin("Google")}
              size={"small"}
              name={""}
              variant={"warning"}
            >
              <span className="social-icon">
                <GoogleIconSVG />
              </span>
              <span className="social-button-content">
                Continue with Google
              </span>
            </Button>
          </div>
          <div className="btn">
            <Button
              className="social-button"
              onClick={() => handleSocialLogin("Apple")}
              size={"small"}
              name={""}
              variant={"warning"}
            >
              <span className="social-icon">
                <AppleIconSvg />
              </span>
              <span className="social-button-content">
                {" "}
                Continue with Apple
              </span>
            </Button>
          </div>
          <div className="btn">
            <Button
              className="social-button"
              onClick={() => handleSocialLogin("Facebook")}
              size={"small"}
              name={""}
              variant={"warning"}
            >
              <span className="social-icon">
                <FacebookIconSVG />
              </span>
              <span className="social-button-content">
                {" "}
                Continue with Facebook
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripmaSignUp;
