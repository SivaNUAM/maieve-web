import React from 'react';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  titleClassName = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={[
        'max-w-3xl',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF8EE] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0F6B4F]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0F6B4F]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={[
          'font-sans text-[clamp(1.9rem,3.4vw,3rem)]! font-extrabold! leading-[1.08]! tracking-tight! text-[#0B2E20]!',
          titleClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </h2>

      {description && (
        <p
          className={[
            'mt-4 max-w-2xl text-sm leading-7 text-[#3E3A1D]! sm:text-base',
            isCenter ? 'mx-auto' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
