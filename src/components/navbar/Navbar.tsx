'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from './navLinks';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={[
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
                    : 'bg-white/60 backdrop-blur-sm py-4',
            ].join(' ')}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="z-50">
                    <Logo variant="dark" size="sm" />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-medium transition-colors text-sm flex items-center gap-1 group text-stone-600 hover:text-amber-600"
                        >
                            {link.name}
                            {link.hasDropdown && (
                                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                            )}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        className="px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 group bg-stone-900 text-white hover:bg-amber-600"
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden z-50 text-stone-900"
                    aria-label="Toggle menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Drawer */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    links={navLinks}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </div>
        </nav>
    );
}