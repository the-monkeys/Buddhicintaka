"use client";

import type { ReactNode } from "react";
import { ChevronRight, X } from "lucide-react";
import type { MegaColumn, MegaLink, MegaPanel } from "../../data/megaMenu";

interface MegaMenuPanelProps {
    panel: MegaPanel;
    onClose: () => void;
}

function MenuLink({
    href,
    onClick,
    className,
    children,
}: {
    href: string;
    onClick: () => void;
    className: string;
    children: ReactNode;
}) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    return (
        <a
            href={href}
            onClick={onClick}
            className={className}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            {children}
        </a>
    );
}

function ColumnLinks({
    links,
    onClose,
}: {
    links: MegaLink[];
    onClose: () => void;
}) {
    return (
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link.name}>
                    <MenuLink
                        href={link.href}
                        onClick={onClose}
                        className="text-[15px] text-[#1a1a1a] hover:text-[var(--brand)] transition-colors"
                    >
                        {link.name}
                    </MenuLink>
                </li>
            ))}
        </ul>
    );
}

function ColumnTitle({
    column,
    onClose,
}: {
    column: MegaColumn;
    onClose: () => void;
}) {
    return (
        <MenuLink
            href={column.href}
            onClick={onClose}
            className="inline-flex items-center gap-0.5 text-[var(--brand)] font-medium mb-5 hover:underline"
        >
            {column.title}
            <ChevronRight className="w-4 h-4" />
        </MenuLink>
    );
}

export function MegaMenuPanel({ panel, onClose }: MegaMenuPanelProps) {
    const [rail, ...rest] = panel.columns;

    return (
        <div className="relative bg-white rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.18)] overflow-hidden">
            <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-[#5c5c5c] hover:text-[#1a1a1a]"
            >
                <X className="w-5 h-5" />
            </button>

            <div
                className="grid"
                style={{
                    gridTemplateColumns: [
                        "minmax(200px,0.85fr)",
                        ...Array(Math.max(rest.length, 0)).fill("minmax(0,1fr)"),
                        panel.spotlight ? "minmax(240px,0.95fr)" : "",
                    ]
                        .filter(Boolean)
                        .join(" "),
                }}
            >
                {rail && (
                    <div className="bg-[#f4f2ee] px-8 py-9 lg:py-10">
                        <ColumnTitle column={rail} onClose={onClose} />
                        <ColumnLinks links={rail.links} onClose={onClose} />
                        {panel.extras && (
                            <div className="mt-10">
                                <MenuLink
                                    href={panel.extras.href}
                                    onClick={onClose}
                                    className="inline-flex items-center text-[var(--brand)] font-medium mb-5 hover:underline"
                                >
                                    {panel.extras.title}
                                </MenuLink>
                                <ColumnLinks links={panel.extras.links} onClose={onClose} />
                            </div>
                        )}
                    </div>
                )}

                {rest.map((column) => (
                    <div key={column.title} className="px-8 py-9 lg:py-10">
                        <ColumnTitle column={column} onClose={onClose} />
                        <ColumnLinks links={column.links} onClose={onClose} />
                    </div>
                ))}

                {panel.spotlight && (
                    <MenuLink
                        href={panel.spotlight.href}
                        onClick={onClose}
                        className="m-5 min-h-[320px] bg-[#1a1a1a] text-white flex flex-col justify-end p-5"
                    >
                        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-3">
                            {panel.spotlight.label}
                        </p>
                        <h3 className="text-lg font-medium mb-2 leading-snug">
                            {panel.spotlight.title}
                        </h3>
                        <p className="text-sm text-white/85 leading-relaxed">
                            {panel.spotlight.description}
                        </p>
                    </MenuLink>
                )}
            </div>
        </div>
    );
}
