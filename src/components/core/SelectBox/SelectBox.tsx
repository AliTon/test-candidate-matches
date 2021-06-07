import React, { ForwardedRef, forwardRef } from 'react';
import Select from 'react-select';
import './Input.styles.scss';

export interface ISelectOptionValue {
  label: string;
  value: string;
}

interface ISelectProps {
  error?: string;
  disabled?: boolean;
  className?: string;
  type?: string;
  placeholder?: string;
  value?: ISelectOptionValue;
  defaultValue?: ISelectOptionValue;
  onChange?: () => void;
  name?: string;
  options: any;
}

const SelectBox: React.FC<ISelectProps> = forwardRef(function Input(
  {
    error,
    disabled,
    className,
    type,
    placeholder,
    value,
    defaultValue,
    onChange,
    name,
    options,
    ...rest
  },
  ref: ForwardedRef<HTMLInputElement>
) {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      background: '#71598c'
    }),
    singleValue: (base: any) => ({
      ...base,
      color: 'white'
    }),
    placeholder: (base: any) => ({
      ...base,
      color: 'white'
    })
  };
  return (
    <div className="select-box">
      <Select
        options={options}
        onChange={onChange}
        isDisabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        styles={customStyles}
      />
      {error && <span className="errorMessage">{error}</span>}
    </div>
  );
});

export default SelectBox;
