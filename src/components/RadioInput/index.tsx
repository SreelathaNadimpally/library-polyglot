import React, { FC } from 'react';

export interface RadioInputProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  className?: string;
  onChange: (value: string) => void;
}

const RadioInput: FC<RadioInputProps> = ({ label, value, checked, onChange }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default RadioInput;
