import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckboxInput, { CheckboxInputProps } from '../src/components/CheckBox-Input';

export default {
    title: 'Components/CheckboxInput',
    component: CheckboxInput,
    argTypes: {
        onChange: { action: 'onChange' },
    },
} as Meta;

const Template: StoryFn<CheckboxInputProps> = (args) => {
    const [isChecked, setIsChecked] = useState<boolean>(args.checked || false);

    const handleChange = (checked: boolean) => {
        setIsChecked(checked);
        args.onChange(checked);
    };

    return <CheckboxInput {...args} checked={isChecked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Check me',
    checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    label: 'I am checked',
    checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'I am disabled',
    checked: false,
    disabled: true,
};
