import React, { useState, ChangeEvent } from 'react';

export interface OTPProps {
  onVerify: (otp: string) => void;
  onResend: () => void;
  resent: boolean;
}

const OTPComponent: React.FC<OTPProps> = ({ onVerify, onResend, resent }) => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = event.target.value.replace(/\D/g, '');
    setOTP(sanitizedValue);
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      onVerify(otp);
    }
  };

  return (
    <div className="Otp-Page" style={styles.container}>
      <div style={styles.innerContainer}>
        <h2 style={styles.heading}>OTP Verification</h2>
        <p>Enter the OTP sent to your <b>email</b></p>
        <form>
          <input
            type="tel"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleOTPChange}
            pattern="[0-9]*"
            inputMode="numeric"
            minLength={6}
            maxLength={6}
            required
            style={styles.input}
          />
          <br />
          <label htmlFor="otp" style={styles.label}>{resent ? "OTP sent successfully." : "OTP Required"}</label>
          <br />
          <p>Didn't receive OTP?</p>
          {resent ? (
            <p>Check your email for the OTP.</p>
          ) : (
            <p>
              <a href="#" onClick={onResend} style={styles.resendLink}>Resend OTP</a>
            </p>
          )}
          <button type="button" onClick={handleVerify} style={styles.continueButton}>Continue</button>
        </form>
        <p style={styles.note}>Note: OTP is valid only for 3 minutes</p>
      </div>
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    innerContainer: {
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      maxWidth: '400px',
      width: '100%',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      // width: '100%',
      marginBottom: '10px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      marginBottom: '10px',
      color: '#888',
    },
    resendLink: {
      color: 'blue',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    continueButton: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    note: {
      fontSize: '12px',
      color: '#888',
      marginTop: '10px',
    },
  };

export default OTPComponent;
