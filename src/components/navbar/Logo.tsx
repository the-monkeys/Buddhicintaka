interface LogoProps {
    inverted?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const Logo = ({ size = "md", className }: LogoProps) => {
    const sizeClasses = {
        sm: "text-[1.35rem]",
        md: "text-2xl",
        lg: "text-3xl",
    };

    return (
        <span
            className={[
                "inline-flex items-center font-semibold tracking-tight select-none whitespace-nowrap text-[var(--brand)]",
                sizeClasses[size],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            BUDDHICINTAKA
        </span>
    );
};
