import { ChevronDown } from 'lucide-react';
import { NavLink } from './navLinks';

interface MobileMenuProps {
    isOpen: boolean;
    links: NavLink[];
    onClose: () => void;
}

export function MobileMenu({ isOpen, links, onClose }: MobileMenuProps) {
    return (
        <div
            className={[
                'absolute top-0 left-0 right-0',
                'bg-white shadow-xl p-4 pt-24 pb-8',
                'md:hidden flex flex-col gap-4',
                'border-b border-stone-100 h-screen overflow-y-auto',
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
                    className="text-2xl font-bold text-stone-800 py-4 border-b border-stone-100 flex justify-between items-center"
                    onClick={onClose}
                >
                    {link.name}
                    {link.hasDropdown && (
                        <ChevronDown className="w-5 h-5 text-stone-400" />
                    )}
                </a>
            ))}

            <div className="flex flex-col gap-4 mt-8">
                <a
                    href="#contact"
                    className="text-center py-4 font-bold bg-amber-500 text-white rounded-xl text-lg shadow-lg shadow-amber-500/20 transition-opacity hover:opacity-90"
                    onClick={onClose}
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
