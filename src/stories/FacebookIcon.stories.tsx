// src/components/FacebookIconSVG.stories.tsx
import React from 'react';
import { StoryFn , Meta } from '@storybook/react';
import FacebookIconSVG from '../components/Icons/FacebookIcon';

export default {
  title: 'Components/FacebookIconSVG',
  component: FacebookIconSVG,
} as Meta;

const Template: StoryFn  = (args) => <FacebookIconSVG {...args} />;

export const Default = Template.bind({});
Default.args = {};
