import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from '../components/Text-Input';

const meta: Meta<TextInputProps> = {
    title: 'Components/TextInput',
    component: TextInput,
    argTypes: {
        onChange: { action: 'changed' }, 
    },
};

export default meta;

type InputFieldStory = StoryFn<TextInputProps>;

export const Base: InputFieldStory = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value);
        console.log('Base Value:', event.target.value);
    };

    return <TextInput {...args} value={inputValue} onChange={handleInputChange} />;
};

export const WithPlaceholder: InputFieldStory = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value);
        console.log('WithPlaceholder Value:', event.target.value);
    };

    return <TextInput  {...args} value={inputValue} onChange={handleInputChange} />;
};

export const Disabled: InputFieldStory = (args) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value);
        console.log('Disabled Value:', event.target.value);
    };

    return <TextInput  {...args} value={inputValue} onChange={handleInputChange} />;
};
