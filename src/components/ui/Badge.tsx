import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'success' | 'orange' | 'outline' | 'dark';
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-[#FFF8EE] text-[#0F6B4F]',
    success:
      'bg-white/95 text-[#0F6B4F] shadow-[0_6px_16px_rgba(11,46,32,0.08)]',
    orange:
      'bg-white/95 text-[#D4AF37] shadow-[0_6px_16px_rgba(11,46,32,0.08)]',
    outline: 'border border-[#D4AF37] bg-white/90 text-[#0B2E20]',
    dark: 'bg-[#0B2E20] text-white',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-[10px]',
    md: 'px-3 py-1.5 text-xs',
  };

  return (
    <span
      className={[
        'inline-flex w-fit items-center justify-center rounded-full font-semibold uppercase tracking-[0.12em]',
        variants[variant],
        sizes[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
