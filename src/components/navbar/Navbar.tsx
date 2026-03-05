"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "./navLinks";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "../ThemeToggle";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={[
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 sm:px-8 lg:px-12 h-16 flex items-center",
                isScrolled
                    ? "bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-primary)]"
                    : "bg-transparent",
            ].join(" ")}
        >
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="z-50">
                    <Logo variant="light" size="sm" />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={[
                                    "font-medium text-sm transition-colors relative py-1",
                                    isActive
                                        ? "text-[var(--text-primary)]"
                                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                                ].join(" ")}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full" />
                                )}
                            </a>
                        );
                    })}

                    <ThemeToggle />

                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[var(--accent)] rounded-lg hover:bg-[var(--accent-hover)] transition-all"
                    >
                        Get Started
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>

                {/* Mobile controls */}
                <div className="md:hidden flex items-center gap-3 z-50">
                    <ThemeToggle />
                    <button
                        className="text-[var(--text-primary)]"
                        aria-label="Toggle menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

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
