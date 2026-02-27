interface LogoProps {
    variant?: 'light' | 'dark' | 'amber';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Logo = ({ variant = 'dark', size = 'md', className }: LogoProps) => {
    const sizeClasses = {
        sm: 'px-4 py-1.5 text-xs tracking-[0.2em]',
        md: 'px-5 py-2 text-sm tracking-[0.2em]',
        lg: 'px-8 py-3 text-base tracking-[0.25em]',
    };

    const variantClasses = {
        light: 'bg-white text-stone-900 border border-stone-200',
        dark: 'bg-stone-900 text-white border border-stone-800',
        amber: 'bg-amber-500 text-white border border-amber-400',
    };

    return (
        <div
            className={[
                'inline-flex items-center justify-center rounded-full font-extrabold uppercase select-none whitespace-nowrap',
                sizeClasses[size],
                variantClasses[variant],
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            BUDDHICINTAKA
        </div>
    );
};