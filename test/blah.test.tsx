import React from 'react';
import * as ReactDOM from 'react-dom';
import InputField from "../src/components/InputField"

describe('InputField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputField type={'text'} value={undefined} onChange={(): void => {
      throw new Error('Function not implemented.');
    }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
