import React from 'react';

export type ButtonProps = {
  type: "button";
  value: any;
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

const Button: React.FC<ButtonProps> = ({ type, value, onClick, ...rest }) => {
  return (
    <React.Fragment>
      <input
        style={{ color: "blueviolet" }}
        type={type}
        value={value}
        onClick={onClick}
        {...rest}
      />
    </React.Fragment>
  );
};

export default Button;
