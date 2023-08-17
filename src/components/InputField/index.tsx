import React from 'react';

export type InputFieldProps = {
  type:"text";
  // "button" | "checkbox" | "color" | "datedatetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
 
}

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, ...rest }): React.ReactElement => {
  return (
    <React.Fragment>
      <input 
      style={{color:"blueviolet"}}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </React.Fragment>
  );
}

export default InputField;
