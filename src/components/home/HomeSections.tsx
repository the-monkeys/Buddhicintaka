import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY_MOTTO } from "../../data/company";
import { PRESS_STORY_TITLE } from "../../data/press";

const services = [
    { name: "Software development", href: "/technology/applications", detail: "Web applications, APIs and ongoing maintenance." },
    { name: "AI and automation", href: "/technology/ai-and-data", detail: "Document search, drafting tools and workflow automation." },
    { name: "Consulting", href: "/consulting", detail: "Architecture reviews, engineering advice and hands-on training." },
];

export default function HomeSections() {
    return (
        <>
            <section id="services" className="scroll-mt-24 bg-[var(--bg-secondary)] py-16 sm:py-20">
                <div className="max-w-[88rem] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
                    <h2 className="text-3xl sm:text-5xl font-medium tracking-tight">Our services</h2>
                    <div className="mt-10 grid gap-8 md:grid-cols-3 lg:gap-12">
                        {services.map((service) => (
                            <Link key={service.href} href={service.href} className="group border-t border-[var(--border-secondary)] pt-5">
                                <h3 className="flex items-center justify-between gap-2 text-xl font-medium group-hover:underline underline-offset-4">
                                    {service.name} <ArrowRight size={16} aria-hidden="true" />
                                </h3>
                                <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">{service.detail}</p>
                            </Link>
                        ))}
                    </div>
                    <Link href="/consulting#offerings" className="mt-8 inline-flex items-center gap-2 font-medium underline underline-offset-4">
                        View all services <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </section>
            <section className="bg-[#1a1a1a] text-white py-20 sm:py-28">
                <div className="max-w-[88rem] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] max-w-4xl">
                        {COMPANY_MOTTO}
                    </p>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                        Founded in Bihar, Buddhicintaka builds software for publishing, identity
                        and notifications. Our engineers maintain the Monkeys open-source community
                        and develop cloud and AI applications for organisations.
                    </p>
                    <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-medium underline underline-offset-4">
                        About Buddhicintaka <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </section>
            <section className="bg-[var(--bg-secondary)] py-16 sm:py-20">
                <div className="max-w-[88rem] mx-auto px-[clamp(1.25rem,5vw,5rem)]">
                    <h2 className="text-3xl sm:text-5xl font-medium tracking-tight">In the press</h2>
                    <Link href="/press" className="mt-6 inline-flex items-center gap-3 font-medium underline underline-offset-4">
                        {PRESS_STORY_TITLE} <ArrowRight size={18} className="shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </>
    );
}
