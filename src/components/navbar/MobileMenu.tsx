"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { megaMenus, topLinks } from "../../data/megaMenu";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    if (!isOpen) return null;

    return (
        <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="px-5 py-2">
                {megaMenus.map((menu) => {
                    const expanded = openId === menu.id;
                    const links =
                        menu.kind === "bar"
                            ? menu.barLinks ?? []
                            : [
                                  ...menu.columns.flatMap((column) => [
                                      { name: column.title, href: column.href },
                                      ...column.links,
                                  ]),
                                  ...(menu.extras?.links ?? []),
                              ];

                    return (
                        <div key={menu.id} className="border-b border-black/5">
                            <button
                                type="button"
                                onClick={() => setOpenId(expanded ? null : menu.id)}
                                className="w-full flex items-center justify-between py-4 text-left text-lg font-medium text-[#1a1a1a]"
                                aria-expanded={expanded}
                            >
                                {menu.label}
                                <ChevronDown
                                    className={[
                                        "w-4 h-4 text-[#5c5c5c] transition-transform",
                                        expanded ? "rotate-180" : "",
                                    ].join(" ")}
                                />
                            </button>
                            {expanded && (
                                <div className="pb-4 space-y-3">
                                    {links.map((link) => (
                                        <a
                                            key={`${menu.id}-${link.name}-${link.href}`}
                                            href={link.href}
                                            onClick={onClose}
                                            className="block text-[#5c5c5c]"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}

                {topLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className="block py-4 text-lg font-medium text-[#1a1a1a] border-b border-black/5"
                    >
                        {link.name}
                    </a>
                ))}

                <a
                    href="/contact"
                    onClick={onClose}
                    className="mt-6 mb-4 flex items-center justify-center py-3 font-semibold text-white rounded-full bg-[var(--cta)]"
                >
                    Consult an expert
                </a>
            </div>
        </div>
    );
}
