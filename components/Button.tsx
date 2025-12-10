import Link from 'next/link';
import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  href,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClasses = `btn btn--${variant} ${size !== 'medium' ? `btn--${size}` : ''} ${fullWidth ? 'btn--full-width' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

