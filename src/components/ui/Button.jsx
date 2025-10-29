import React from 'react';

const Button = ({ children, variant = 'primary', size = 'sm', className = '', ...props }) => {
  const base =
    'inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-primary/30 hover:bg-primary/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-muted-foreground underline-offset-4 no-underline hover:underline',
    routeLink: 'text-primary',
  };

  const sizes = {
    xs: 'h-7 px-1 text-xs',
    sm: 'h-8.5 px-2',
    md: 'h-9 px-3 py-2',
    lg: 'h-10 px-2.5',
    icon: 'h-7 w-7',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
