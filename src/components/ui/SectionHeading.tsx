import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        alignment === 'center' && 'text-center'
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-accent uppercase tracking-[0.2em] text-sm font-medium mb-3',
            light && 'text-secondary'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'w-16 h-1 bg-accent mt-4 mb-4',
          alignment === 'center' && 'mx-auto'
        )}
      />
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl',
            alignment === 'center' && 'mx-auto',
            light ? 'text-white/60' : 'text-primary/60'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
