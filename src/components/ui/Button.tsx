import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6B4F] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    primary:
      'bg-[#0F6B4F] text-white! shadow-[0_8px_20px_rgba(15,107,79,0.28)] hover:-translate-y-0.5 hover:bg-[#0B2E20] hover:shadow-[0_14px_30px_rgba(15,107,79,0.36)]',
    secondary:
      'bg-[#0B2E20] text-white! shadow-[0_8px_20px_rgba(11,46,32,0.16)] hover:-translate-y-0.5 hover:bg-[#0B2E20] hover:shadow-[0_12px_28px_rgba(11,46,32,0.22)]',
    outline:
      'border border-[#D4AF37] bg-white text-[#0B2E20]! hover:-translate-y-0.5 hover:border-[#0F6B4F] hover:text-[#0F6B4F]!',
    ghost:
      'bg-transparent text-[#0B2E20]! hover:bg-[#FFF8EE] hover:text-[#0F6B4F]!',
  };

  const sizes = {
    sm: 'min-h-9 px-4 text-xs',
    md: 'min-h-11 px-5 text-sm',
    lg: 'min-h-14 px-7 text-base',
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowUpRight
          size={size === 'sm' ? 14 : size === 'md' ? 16 : 18}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </button>
  );
};

export default Button;
