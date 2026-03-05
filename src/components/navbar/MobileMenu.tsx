import { NavLink } from './navLinks';
import { ArrowRight } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
    links: NavLink[];
    onClose: () => void;
}

export function MobileMenu({ isOpen, links, onClose }: MobileMenuProps) {
    return (
        <div
            className={[
                'fixed inset-0 z-40',
                'bg-[var(--bg-primary)] p-6 pt-24 pb-8',
                'md:hidden flex flex-col gap-2',
                'overflow-y-auto',
                'transition-all duration-300 ease-in-out',
                isOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-4 pointer-events-none',
            ].join(' ')}
        >
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-bold text-[var(--text-primary)] py-4 border-b border-[var(--border-primary)] flex justify-between items-center hover:text-[var(--accent)] transition-colors"
                    onClick={onClose}
                >
                    {link.name}
                </a>
            ))}

            <div className="flex flex-col gap-4 mt-8">
                <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 py-4 font-bold bg-[var(--accent)] text-white rounded-xl text-lg hover:bg-[var(--accent-hover)] transition-all"
                    onClick={onClose}
                >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
