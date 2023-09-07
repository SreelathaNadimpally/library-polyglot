import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PasswordInputProps } from '../components/Password-Input';
import PasswordInput from '../components/Password-Input';

export default {
    title: 'Components/PasswordInput',
    component: PasswordInput,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' }
    }
} as Meta;

const Template: StoryFn<PasswordInputProps> = (args) => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    return <PasswordInput {...args} value={password} onChange={handlePasswordChange} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Password:',
    value: '',
    placeholder: 'Enter your password',
    disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true
};
