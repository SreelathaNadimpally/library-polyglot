import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import EmailInput, { EmailInputProps } from '../../src/components/Email-Input';

export default {
    title: 'Components/EmailInput',
    component: EmailInput,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' }
    }
} as Meta;

const Template: StoryFn<EmailInputProps> = (args) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    };

    return <EmailInput {...args} value={email} onChange={handleEmailChange} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Email:',
    value: '',
    placeholder: 'Enter your email',
    disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true
};
