"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Menu, X } from "lucide-react";

import ScrollReveal from "../animation/ScrollReveal";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="relative z-10 w-full bg-white border-b border-slate-200">
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl py-4">
                <Link href="/" className="flex items-center group">
                    <span className="font-display font-black tracking-[0.15em] text-xl md:text-2xl uppercase text-brand group-hover:text-brand-hover transition-colors">
                        Buddhicintaka
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/products" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">Products</Link>
                    <Link href="/services" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">Services</Link>
                    <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">About</Link>
                    <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors">Contact Us</Link>
                    <Link 
                        href="https://github.com/the-monkeys" 
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-semibold text-accent border-2 border-brand hover:bg-brand-hover hover:text-white px-5 py-2 rounded-full transition-all"
                    >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden p-2 text-slate-600 hover:text-slate-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <ScrollReveal
                    className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl"
                >
                    <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-brand">Services</Link>
                    <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-brand">Products</Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-brand">About Us</Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-brand">Contact Us</Link>
                    <Link
                        href="https://github.com/the-monkeys" 
                        target="_blank"
                        className="flex items-center justify-center gap-2 text-lg font-semibold text-white bg-brand px-5 py-3 rounded-full mt-4 hover:bg-brand-hover"
                    >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                    </Link>
                </ScrollReveal>
            )}
        </header>
    );
};

export default Navbar;
