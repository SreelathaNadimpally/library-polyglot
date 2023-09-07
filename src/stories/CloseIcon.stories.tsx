// src/components/CloseIcon.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CloseIcon from '../components/Icons/CloseIcon';

export default {
  title: 'Components/CloseIcon',
  component: CloseIcon,
} as Meta;

const Template: StoryFn = (args) => <CloseIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
