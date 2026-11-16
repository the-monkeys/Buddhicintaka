"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { ActionLink } from "../ActionLink";
import { Logo } from "./Logo";
import { MegaMenuPanel } from "./MegaMenuPanel";
import { MobileMenu } from "./MobileMenu";
import { megaMenus, topLinks } from "../../data/megaMenu";

export function Navbar() {
    const pathname = usePathname();
    return <Navigation key={pathname} />;
}

function Navigation() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuTrigger = useRef<HTMLButtonElement | null>(null);
    const activePanel = megaMenus.find((menu) => menu.id === openMenu) ?? null;

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 64rem)");
        const closeMenus = () => {
            setOpenMenu(null);
            setIsMobileMenuOpen(false);
        };
        desktop.addEventListener("change", closeMenus);
        return () => desktop.removeEventListener("change", closeMenus);
    }, []);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && (openMenu || isMobileMenuOpen)) {
                setOpenMenu(null);
                setIsMobileMenuOpen(false);
                menuTrigger.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [openMenu, isMobileMenuOpen]);

    const toggleMenu = (id: string, trigger: HTMLButtonElement) => {
        menuTrigger.current = trigger;
        setOpenMenu((current) => (current === id ? null : id));
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {openMenu && (
                <button
                    type="button"
                    aria-label="Close menu overlay"
                    className="fixed inset-0 z-40 hidden bg-black/30 lg:block"
                    onClick={() => setOpenMenu(null)}
                />
            )}

            <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_1px_0_rgba(17,32,31,0.12)]">
                <nav aria-label="Main navigation">
                    <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-3 px-[clamp(1.25rem,5vw,5rem)] sm:h-[4.5rem]">
                        <div className="flex items-center min-w-0">
                            <Link
                                href="/"
                                className="shrink-0 pr-4 lg:pr-10"
                                onClick={() => {
                                    setOpenMenu(null);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
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
                                            onClick={(event) => toggleMenu(menu.id, event.currentTarget)}
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
                            <ActionLink href="/contact">Talk to us</ActionLink>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button
                                className="w-10 h-10 rounded-full flex items-center justify-center text-[#1a1a1a]"
                                aria-label="Toggle menu"
                                aria-expanded={isMobileMenuOpen}
                                aria-controls={isMobileMenuOpen ? "mobile-navigation" : undefined}
                                onClick={(event) => {
                                    menuTrigger.current = event.currentTarget;
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
                    <div className="hidden lg:block mt-2 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl">
                        <MegaMenuPanel panel={activePanel} onClose={() => setOpenMenu(null)} />
                    </div>
                )}

                <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            </header>
        </>
    );
}
