import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = 'sm',
  type = 'button',
  className = '',
}) => {
  const sizeClass = size === 'lg' ? 'btn-secondary-lg' : 'btn-secondary';

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