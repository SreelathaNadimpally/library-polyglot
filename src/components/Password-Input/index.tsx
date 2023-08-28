import React, { ChangeEvent } from 'react';

export interface PasswordInputProps {
    label?: string;
    value: string;
    name:string;
    className?:string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?:boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, value, onChange, placeholder, disabled }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <div>
            <label>{label}</label>
            <input type="password" value={value} onChange={handleInputChange} placeholder={placeholder} disabled={disabled} />
        </div>
    );
};

export default PasswordInput;
