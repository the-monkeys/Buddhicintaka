"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bookmark, ChevronDown, ChevronRight, Menu, Plus, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { MegaMenuPanel } from "./MegaMenuPanel";
import { MobileMenu } from "./MobileMenu";
import { megaMenus, topLinks } from "../../data/megaMenu";

export function Navbar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const activePanel = megaMenus.find((menu) => menu.id === openMenu) ?? null;

    useEffect(() => {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpenMenu(null);
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const toggleMenu = (id: string) => {
        setOpenMenu((current) => (current === id ? null : id));
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {openMenu && (
                <button
                    type="button"
                    aria-label="Close menu overlay"
                    className="fixed inset-0 z-40 bg-black/30"
                    onClick={() => setOpenMenu(null)}
                />
            )}

            <header className="fixed top-3 left-3 right-3 z-50">
                <nav className="bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                    <div className="h-[3.6rem] sm:h-[3.85rem] px-4 sm:px-5 flex items-center justify-between gap-3">
                        <div className="flex items-center min-w-0">
                            <Link href="/" className="shrink-0 pr-3 sm:pr-5" onClick={() => setOpenMenu(null)}>
                                <Logo size="sm" />
                            </Link>

                            <div className="hidden lg:flex items-center">
                                {megaMenus.map((menu) => {
                                    const isOpen = openMenu === menu.id;
                                    return (
                                        <button
                                            key={menu.id}
                                            type="button"
                                            aria-expanded={isOpen}
                                            onClick={() => toggleMenu(menu.id)}
                                            className={[
                                                "inline-flex items-center gap-1 px-2.5 py-2 text-[14px] font-medium transition-colors",
                                                isOpen
                                                    ? "text-[var(--brand)]"
                                                    : "text-[#1a1a1a] hover:text-[var(--brand)]",
                                            ].join(" ")}
                                        >
                                            {menu.label}
                                            <ChevronDown
                                                className={[
                                                    "w-3.5 h-3.5 transition-transform",
                                                    isOpen ? "rotate-180" : "",
                                                ].join(" ")}
                                            />
                                        </button>
                                    );
                                })}
                                {topLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpenMenu(null)}
                                        className="px-2.5 py-2 text-[14px] font-medium text-[#1a1a1a] hover:text-[var(--brand)]"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-2">
                            <span className="px-2 text-[13px] text-[#5c5c5c]">IN - EN</span>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                            >
                                Consult an expert
                                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                                    <Plus className="w-3.5 h-3.5" />
                                </span>
                            </a>
                            <button
                                type="button"
                                aria-label="Bookmarks"
                                className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#1a1a1a]"
                            >
                                <Bookmark className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                aria-label="Forward"
                                className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#1a1a1a]"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <button
                                type="button"
                                aria-label="Search"
                                className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#1a1a1a]"
                            >
                                <Search className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button
                                className="w-10 h-10 rounded-full flex items-center justify-center text-[#1a1a1a]"
                                aria-label="Toggle menu"
                                onClick={() => {
                                    setIsMobileMenuOpen((open) => !open);
                                    setOpenMenu(null);
                                }}
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </nav>

                {activePanel?.kind === "bar" && (
                    <div className="hidden lg:block mt-2 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        <div className="h-12 px-8 flex items-center gap-7">
                            {activePanel.barLinks?.map((link) => {
                                const external =
                                    link.href.startsWith("http") ||
                                    link.href.startsWith("mailto:");
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm text-[#1a1a1a] hover:text-[var(--brand)]"
                                        onClick={() => setOpenMenu(null)}
                                        {...(external
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}

                {activePanel?.kind === "mega" && (
                    <div className="hidden lg:block mt-2 z-50">
                        <MegaMenuPanel panel={activePanel} onClose={() => setOpenMenu(null)} />
                    </div>
                )}

                <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            </header>
        </>
    );
}
