import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../src/components/Button';

interface ExtendedButtonProps extends ButtonProps {
  variant: string;
  style: {
    backgroundColor: string;
  };
}

const meta: Meta<ExtendedButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    variant: 'default',
    style: {
      backgroundColor: 'blueviolet',
    },
  },
};
export default meta;

export const Basic: StoryFn<ExtendedButtonProps> = (args) => <Button {...args}>Click Me</Button>;
Basic.args = {
  type: 'button',
  value: 'Click Me',
  onClick: () => {},
};

export const WithVariant: StoryFn<ExtendedButtonProps> = (args) => <Button {...args}>Click Me</Button>;
WithVariant.args = {
  type: 'button',
  value: 'Click Me',
  onClick: () => {},
  variant: 'primary',
  style: {
    backgroundColor: 'green',
  },
};
