import React, { ForwardedRef, forwardRef } from 'react';
import './Input.styles.scss';

interface IInputProps {
  error?: string;
  disabled?: boolean;
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: () => void;
  name?: string;
  style?: Object;
}

const Input: React.FC<IInputProps> = forwardRef(function Input(
  {
    error,
    disabled,
    className = 'input',
    type = 'text',
    placeholder,
    value,
    defaultValue,
    onChange,
    name,
    style,
    ...rest
  },
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="inputField">
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        ref={ref}
        style={style}
        {...rest}
      />
      {error && <span className="errorMessage">{error}</span>}
    </div>
  );
});

export default Input;
