export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    delay?: number;
}