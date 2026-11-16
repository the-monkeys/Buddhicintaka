import { ActionLink } from "./ActionLink";

export default function CTA() {
    return (
        <section className="bg-[var(--bg-primary)]">
            <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-6 px-[clamp(1.25rem,5vw,5rem)] py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
                <h2 className="max-w-3xl text-3xl font-medium tracking-tight sm:text-5xl">
                    Discuss a software project.
                </h2>
                <ActionLink href="/contact">Talk to us</ActionLink>
            </div>
        </section>
    );
}
