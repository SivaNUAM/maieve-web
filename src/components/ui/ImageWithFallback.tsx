import React, { useEffect, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import { Leaf } from 'lucide-react';

interface ImageWithFallbackProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string;
  fallbackSrc?: string;
  alt: string;
  showFallbackIcon?: boolean;
  containerClassName?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  showFallbackIcon = true,
  containerClassName = '',
  className = '',
  onError,
  ...props
}) => {
  const [hasError, setHasError] = useState(!src);

  useEffect(() => {
    setHasError(!src);
  }, [src]);

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    if (fallbackSrc && event.currentTarget.src !== fallbackSrc) {
      event.currentTarget.src = fallbackSrc;
      return;
    }

    setHasError(true);
    onError?.(event);
  };

  return (
    <div
      className={[
        'relative overflow-hidden bg-[#FFF8EE]',
        containerClassName,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={[
            'h-full w-full object-cover',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          onError={handleError}
          {...props}
        />
      ) : (
        <div className="flex h-full min-h-24 w-full flex-col items-center justify-center gap-2 bg-[#FFF8EE] px-4 py-8 text-center text-[#0F6B4F]">
          {showFallbackIcon && <Leaf size={22} strokeWidth={1.75} />}
          <span className="text-xs font-semibold tracking-wide text-[#0F6B4F]">
            Image unavailable
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
