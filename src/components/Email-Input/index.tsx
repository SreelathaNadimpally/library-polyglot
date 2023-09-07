import React, { ChangeEvent } from 'react';

export interface EmailInputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    name: string;
    className?: string; 
}

const EmailInput: React.FC<EmailInputProps> = ({ label, value, onChange, placeholder, disabled, name, className }) => {
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <div className={className}> 
            <label>{label}</label>
            <input
                type="email"
                name={name}
                value={value}
                onChange={handleEmailChange}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
};

export default EmailInput;
