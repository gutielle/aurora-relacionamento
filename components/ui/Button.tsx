
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  as = 'button',
  href,
  ...props 
}) => {
  const baseStyles = 'inline-block font-bold tracking-wider text-center transition-all duration-300 ease-in-out rounded-lg shadow-lg px-8 py-3 text-lg';
  
  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-purple-500/40 transform hover:-translate-y-1',
    secondary: 'bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (as === 'a') {
    const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
    return (
      <a 
        href={href} 
        className={combinedClassName} 
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
