import React, { ChangeEvent } from 'react';

export interface CheckboxInputProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    name: string;
    className?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, checked, onChange, disabled }) => {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        onChange(newChecked);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                    disabled={disabled}
                />
                {label}
            </label>
        </div>
    );
};

export default CheckboxInput;
