import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  primary?: boolean;
  label?: string;
  size: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  name: string;
  className?: string;
  style?: React.CSSProperties;
  variant: 'default' | 'primary' | 'success' | 'danger' | 'warning';
}

const Button = ({
  onClick,
  disabled,
  children,
  style,
  className,
  variant,
  ...rest
}: ButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      style={{
        backgroundColor: 'primary',
        //  variant === 'primary'? 'blue':'gray'
      }}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
