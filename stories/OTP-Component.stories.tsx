import React from 'react';
import { StoryFn, Meta } from  '@storybook/react';

import OTPComponent, { OTPProps } from '../src/components/OTP-Component';

export default {
  title: 'Components/OTPComponent',
  component: OTPComponent,
} as Meta;

const Template: StoryFn<OTPProps> = (args) => <OTPComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  onVerify: (otp) => {
    // Implement your verification logic here
    console.log(`Verifying OTP: ${otp}`);
  },
  onResend: () => {
    // Implement your OTP resend logic here
    console.log('Resending OTP...');
  },
  resent: false,
};

export const OTPResent = Template.bind({});
OTPResent.args = {
  ...Default.args,
  resent: true,
};
