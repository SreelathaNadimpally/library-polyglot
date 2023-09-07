// src/components/GoogleIconSVG.stories.tsx
import React from 'react';
import { StoryFn , Meta } from '@storybook/react';
import GoogleIconSVG from '../components/Icons/GoogleIcon/Index';

export default {
  title: 'Components/GoogleIconSVG',
  component: GoogleIconSVG,
} as Meta;

const Template: StoryFn  = (args) => <GoogleIconSVG {...args} />;

export const Default = Template.bind({});
Default.args = {};
