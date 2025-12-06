import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = 'sm',
  type = 'button',
  className = '',
}) => {
  const sizeClass = size === 'lg' ? 'btn-primary-lg' : 'btn-primary';

  return (
    <button
      className={`${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span className="text-truncate">{children}</span>
    </button>
  );
};