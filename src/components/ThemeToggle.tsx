"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
    listeners.add(callback);
    return () => listeners.delete(callback);
}

function getTheme(): "dark" | "light" {
    const stored = localStorage.getItem("theme");
    return stored === "dark" || stored === "light" ? stored : "light";
}

function emit() {
    listeners.forEach((listener) => listener());
}

export function ThemeToggle({ inverted = false }: { inverted?: boolean }) {
    const theme = useSyncExternalStore(subscribe, getTheme, () => "light");

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);
        emit();
    };

    return (
        <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className={[
                "w-9 h-9 flex items-center justify-center border transition-colors cursor-pointer",
                inverted
                    ? "border-white/30 text-white/80 hover:text-white hover:border-white"
                    : "border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-border)]",
            ].join(" ")}
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4" />
            ) : (
                <Moon className="w-4 h-4" />
            )}
        </button>
    );
}
