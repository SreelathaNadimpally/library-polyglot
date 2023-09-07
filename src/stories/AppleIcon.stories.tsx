import React from 'react';
import { storiesOf } from '@storybook/react';
import AppleSvgIcon from '../components/Icons/AppleIcon/Index'; 


storiesOf('AppleSvgIcon', module)
  .add('default', () => <AppleSvgIcon />)
  .add('custom size', () => <AppleSvgIcon width="30" height="30" />)
  .add('custom color', () => <AppleSvgIcon fill="red" />)
  .add('custom style', () => (
    <AppleSvgIcon
      width="40"
      height="40"
      style={{ backgroundColor: 'yellow' }}
    />
  ));
