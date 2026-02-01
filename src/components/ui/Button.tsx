import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-gold text-obsidian hover:bg-white hover:text-obsidian shadow-md',
            secondary: 'bg-white text-obsidian hover:bg-gray-100',
            dark: 'bg-obsidian text-white border border-white/10 hover:border-gold',
            outline: 'border border-gold text-gold hover:bg-gold hover:text-obsidian',
            ghost: 'bg-transparent text-white hover:text-gold',
        };

        const sizes = {
            sm: 'px-4 py-1.5 text-sm',
            md: 'px-6 py-2.5 text-base',
            lg: 'px-8 py-3 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'rounded-full font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
