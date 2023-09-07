import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TripmaSignUp, { SignUpProps } from '../components/Tripma-SignUp';

export default {
  title: 'Components/TripmaSignUp',
  component: TripmaSignUp,
} as Meta;

const Template: StoryFn<SignUpProps> = (args) => <TripmaSignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSignUp: (emailOrPhone, password, agreeToTerms, sendDealAlerts) => {
    // Implement your custom onSignUp logic for the story here
    console.log('Sign Up:', emailOrPhone, password, agreeToTerms, sendDealAlerts);
  },
};
