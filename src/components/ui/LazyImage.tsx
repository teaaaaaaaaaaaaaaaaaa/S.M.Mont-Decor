import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../utils/cn';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

export default function LazyImage({
  src,
  alt,
  className,
  onClick,
  priority = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    rootMargin: '200px',
    triggerOnce: true,
  });

  const shouldLoad = priority || inView;

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden bg-secondary/30 relative', className)}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary/30 animate-pulse" />
      )}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
}
