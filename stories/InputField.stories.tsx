import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import InputField, { InputFieldProps } from '../src/components/InputField';

interface ExtendedInputFieldProps extends InputFieldProps {
    placeholder: string;
}

const meta: Meta<ExtendedInputFieldProps> = {
    title: 'InputField',
    component: InputField,
    args: {
        value: '',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            console.log('Value changed:', value);
        },
        placeholder: 'Default Placeholder' 
    }
};

export default meta;

type InputFieldStoryFn = StoryFn<ExtendedInputFieldProps>;

export const Base: InputFieldStoryFn = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value);
        console.log('Base Value:', event.target.value);
    };

    return <InputField {...args} value={inputValue} onChange={handleInputChange} />;
};

export const WithPlaceholder: InputFieldStoryFn = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value);
        console.log('WithPlaceholder Value:', event.target.value);
    };

    return <InputField {...args} value={inputValue} onChange={handleInputChange} />;
};

export const Disabled: InputFieldStoryFn = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value);
        console.log('Disabled Value:', event.target.value);
    };

    return <InputField {...args} value={inputValue} onChange={handleInputChange} />;
};
