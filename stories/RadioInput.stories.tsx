import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioInput, { RadioInputProps } from '../src/components/RadioInput';

export default {
  title: 'RadioButton',
  component: RadioInput,
} as Meta;


const Template: StoryFn<RadioInputProps> = (args) => <RadioInput {...args} />;

// Default Radio Button
export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  label: 'Option 1',
  value: 'option1',
  checked: false,
  onChange: (value) => console.log(`Selected: ${value}`),
};

//  Checked Radio Button
export const CheckedRadioButton = Template.bind({});
CheckedRadioButton.args = {
  label: 'Option 2',
  value: 'option2',
  checked: true,
  onChange: (value) => console.log(`Selected: ${value}`),
};
