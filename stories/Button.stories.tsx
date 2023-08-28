import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../src/components/Button';

interface ExtendedButtonProps extends ButtonProps {
  variant: "default" | "primary" | "success" | "danger" | "warning";
  style: {
    backgroundColor: string;
    color: string;
  };
  value: string;
}

export const Basic: StoryFn<ExtendedButtonProps> = (args) => (
  <Button {...args}>Click Me</Button>
);
Basic.args = {
  type: 'button',
  onClick: () => {},
  value: 'Click Me',
  variant: 'default',
  style: {
    backgroundColor: 'transparent',
    color: 'black',
  },
};

export const WithPrimaryVariant: StoryFn<ExtendedButtonProps> = (args) => (
  <Button {...args}>Click Me</Button>
);
WithPrimaryVariant.args = {
  type: 'button',
  onClick: () => {},
  variant: 'primary',
  style: {
    backgroundColor: 'blue',
    color: 'white',
  },
};

export const WithSuccessVariant: StoryFn<ExtendedButtonProps> = (args) => (
  <Button {...args}>Click Me</Button>
);
WithSuccessVariant.args = {
  type: 'button',
  onClick: () => {},
  variant: 'success',
  style: {
    backgroundColor: 'green',
    color: 'white',
  },
};

export const WithDangerVariant: StoryFn<ExtendedButtonProps> = (args) => (
  <Button {...args}>Click Me</Button>
);
WithDangerVariant.args = {
  type: 'button',
  onClick: () => {},
  variant: 'danger',
  style: {
    backgroundColor: 'red',
    color: 'white',
  },
};

export const WithWarningVariant: StoryFn<ExtendedButtonProps> = (args) => (
  <Button {...args}>Click Me</Button>
);
WithWarningVariant.args = {
  type: 'button',
  onClick: () => {},
  variant: 'warning',
  style: {
    backgroundColor: 'orange',
    color: 'white',
  },
};
