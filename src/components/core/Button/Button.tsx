import React from 'react';

import './Button.styles.scss';

interface IButton {
  children: JSX.Element | string;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  loading,
  disabled,
  className,
  ...rest
}): JSX.Element => {
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
