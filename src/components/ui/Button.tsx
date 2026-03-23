import { cn } from '../../utils/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary: 'border-2 border-accent text-white bg-accent/10 hover:bg-accent/20 backdrop-blur-sm',
  secondary: 'border-2 border-secondary text-white bg-secondary/10 hover:bg-secondary/20 backdrop-blur-sm',
  outline: 'border-2 border-white text-white bg-transparent hover:bg-white/10 backdrop-blur-sm',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'outline',
  size = 'md',
  href,
  onClick,
  children,
  className,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
