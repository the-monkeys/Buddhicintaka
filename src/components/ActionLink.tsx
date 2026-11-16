import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ActionLinkProps = {
    href: string;
    children: ReactNode;
    onClick?: () => void;
};

export function ActionLink({ href, children, onClick }: ActionLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
        >
            {children}
            <span aria-hidden="true" className="w-8 h-8 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
            </span>
        </Link>
    );
}
