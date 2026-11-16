"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { COMPANY_EMAIL } from "../../data/company";

export function EnquiryForm() {
    const [draft, setDraft] = useState("");

    function openEmailDraft(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = String(data.get("message")).replace(/\r?\n/g, "\r\n");
        const body = `${message}\r\n\r\n${data.get("name")}\r\n${data.get("email")}`;
        setDraft(body);
        window.location.href = `mailto:${COMPANY_EMAIL}?subject=Website%20enquiry&body=${encodeURIComponent(body)}`;
    }

    return (
        <form action={`mailto:${COMPANY_EMAIL}`} method="post" encType="text/plain" onSubmit={openEmailDraft} onChange={() => setDraft("")} className="space-y-6">
            <h2 className="text-2xl font-medium tracking-tight">Write an enquiry</h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                Open a draft with these details, then send it from your email app.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                        placeholder="Your name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                        placeholder="you@organisation.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)]">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] resize-y"
                    placeholder="How can we help?"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-[var(--cta)] text-white font-semibold rounded-full hover:bg-[var(--cta-hover)] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
                Open email draft
                <Mail className="w-4 h-4" />
            </button>
            {draft && (
                <div className="space-y-2">
                    <p role="status" className="text-sm text-[var(--text-secondary)]">
                        If your email app did not open, copy your enquiry into an email to{" "}
                        <span className="break-all">{COMPANY_EMAIL}</span>.
                    </p>
                    <textarea
                        aria-label="Enquiry to copy"
                        readOnly
                        value={draft}
                        onFocus={(event) => event.currentTarget.select()}
                        rows={4}
                        className="w-full rounded-lg border border-[var(--border-primary)] p-3 text-sm"
                    />
                </div>
            )}
        </form>
    );
}
