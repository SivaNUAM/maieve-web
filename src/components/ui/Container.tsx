
import React from 'react';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow' | 'full';
  as?: 'div' | 'section' | 'main' | 'header' | 'footer';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  as: Tag = 'div',
}) => {
  const sizes = {
    default: 'max-w-[1440px]',
    wide: 'max-w-[1440px]',
    narrow: 'max-w-4xl',
    full: 'max-w-none',
  };

  return (
    <Tag
      className={[
        'mx-auto w-full px-4 sm:px-5 lg:px-6',
        sizes[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
};

export default Container;