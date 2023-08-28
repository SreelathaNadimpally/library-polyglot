import React from 'react';

export type TextInputProps = {
  type: "text" ;
  // | "button" | "checkbox" | "color" | "datedatetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
  value: any;
 style?: React.CSSProperties;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?:string;
  name:string;
  placeholder?: string;
  required?:boolean;
  className?:string;
};

const TextInput: React.FC<TextInputProps> = ({ style,type, value, onChange, ...rest }: TextInputProps): React.ReactElement => {
  return (
    <React.Fragment>
      <input
        style={style}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </React.Fragment>
  );
};

export default TextInput;
