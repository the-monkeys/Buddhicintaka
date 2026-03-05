"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ecosystemTree } from "../../data/ecosystem";

const EcosystemTree = () => {
    const [openBranch, setOpenBranch] = useState<number | null>(0);

    return (
        <section className="py-20 sm:py-28 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                        Our Ecosystem
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                        Everything we are.
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Products, values, and services — all rooted in one mission.
                    </p>
                </div>

                {/* Desktop Tree View */}
                <div className="hidden lg:block">
                    {/* Root Node */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-[var(--bg-secondary)] border-2 border-[var(--accent)] rounded-2xl px-10 py-6 text-center">
                            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-wide uppercase">
                                {ecosystemTree.root.label}
                            </h3>
                            <p className="text-[var(--accent)] text-sm font-medium mt-1">
                                {ecosystemTree.root.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Vertical connector from root */}
                    <div className="flex justify-center mb-0">
                        <div className="w-px h-10 bg-[var(--border-secondary)]" />
                    </div>

                    {/* Horizontal connector bar */}
                    <div className="relative flex justify-center mb-0">
                        <div className="absolute top-0 left-1/6 right-1/6 h-px bg-[var(--border-secondary)]" />
                        <div className="w-full max-w-4xl relative">
                            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-px bg-[var(--border-secondary)]" />
                        </div>
                    </div>

                    {/* Branches */}
                    <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {ecosystemTree.branches.map((branch, branchIdx) => (
                            <div key={branch.label} className="flex flex-col items-center">
                                {/* Vertical connector to branch */}
                                <div className="w-px h-8 bg-[var(--border-secondary)]" />

                                {/* Branch label */}
                                <div className="bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] rounded-xl px-6 py-3 mb-6 text-center">
                                    <h4 className="text-base font-bold text-[var(--text-primary)]">
                                        {branch.label}
                                    </h4>
                                </div>

                                {/* Leaf nodes */}
                                <div className="space-y-3 w-full">
                                    {branch.children.map((child) => {
                                        const Tag = child.href ? "a" : "div";
                                        return (
                                            <Tag
                                                key={child.label}
                                                {...(child.href ? { href: child.href } : {})}
                                                className={`block bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg px-4 py-3 transition-all duration-200 ${child.href
                                                    ? "hover:border-[var(--accent-border)] cursor-pointer group"
                                                    : ""
                                                    }`}
                                            >
                                                <p className={`text-sm font-semibold text-[var(--text-primary)] ${child.href ? "group-hover:text-[var(--accent)]" : ""} transition-colors`}>
                                                    {child.label}
                                                </p>
                                                {child.description && (
                                                    <p className="text-xs text-[var(--text-tertiary)] mt-1 leading-relaxed">
                                                        {child.description}
                                                    </p>
                                                )}
                                            </Tag>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet Accordion View */}
                <div className="lg:hidden">
                    {/* Root Node */}
                    <div className="bg-[var(--bg-secondary)] border-2 border-[var(--accent)] rounded-2xl px-6 py-5 text-center mb-6">
                        <h3 className="text-xl font-extrabold text-[var(--text-primary)] tracking-wide uppercase">
                            {ecosystemTree.root.label}
                        </h3>
                        <p className="text-[var(--accent)] text-sm font-medium mt-1">
                            {ecosystemTree.root.tagline}
                        </p>
                    </div>

                    {/* Accordion Branches */}
                    <div className="space-y-3">
                        {ecosystemTree.branches.map((branch, idx) => (
                            <div
                                key={branch.label}
                                className="border border-[var(--border-primary)] rounded-xl overflow-hidden bg-[var(--bg-secondary)]"
                            >
                                <button
                                    onClick={() => setOpenBranch(openBranch === idx ? null : idx)}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                                >
                                    <span className="text-base font-bold text-[var(--text-primary)]">
                                        {branch.label}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 text-[var(--text-tertiary)] transition-transform duration-200 ${openBranch === idx ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {openBranch === idx && (
                                    <div className="px-5 pb-4 space-y-2">
                                        {branch.children.map((child) => {
                                            const Tag = child.href ? "a" : "div";
                                            return (
                                                <Tag
                                                    key={child.label}
                                                    {...(child.href ? { href: child.href } : {})}
                                                    className={`block bg-[var(--bg-tertiary)] rounded-lg px-4 py-3 ${child.href ? "hover:bg-[var(--accent-subtle)]" : ""} transition-colors`}
                                                >
                                                    <p className="text-sm font-medium text-[var(--text-primary)]">
                                                        {child.label}
                                                    </p>
                                                    {child.description && (
                                                        <p className="text-xs text-[var(--text-tertiary)] mt-0.5">
                                                            {child.description}
                                                        </p>
                                                    )}
                                                </Tag>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemTree;
