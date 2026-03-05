import * as motion from "motion/react-client";
import { ArrowRight, MessageSquare } from "lucide-react";
import { NetworkVisualization } from "./NetworkVisualization";
import { heroStats } from "./heroData";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[var(--bg-primary)] min-h-screen flex items-center">
            {/* Network visualization — subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-[0.07]">
                    <NetworkVisualization />
                </div>
                <div className="absolute top-0 left-0 w-2/3 h-full bg-linear-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent z-10" />
                <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[var(--bg-primary)] to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[var(--bg-primary)] to-transparent z-10" />
            </div>

            {/* Subtle accent glow */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full pt-32 pb-16 md:pt-44 md:pb-24">
                <div className="max-w-3xl">
                    {/* Overline badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 bg-[var(--accent-subtle)] border border-[var(--accent-border)] rounded-full px-4 py-2 mb-8"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        <span className="text-[var(--accent)] font-semibold tracking-[0.15em] uppercase text-xs">
                            Open Source · Enterprise Ready
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-[1.08] mb-8 tracking-tight"
                    >
                        We build software
                        <br />
                        that runs the world.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-xl leading-relaxed"
                    >
                        Technology company building production-grade open-source products
                        for identity, notifications, and content platforms. All on our own
                        bare-metal infrastructure.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <a
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[var(--accent)] rounded-lg hover:bg-[var(--accent-hover)] transition-all hover:-translate-y-0.5"
                        >
                            Explore Products
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--text-primary)] border border-[var(--border-secondary)] rounded-lg hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all"
                        >
                            <MessageSquare className="mr-2 w-5 h-5" />
                            Talk to Us
                        </a>
                    </motion.div>
                </div>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-x-10 gap-y-3 border-t border-[var(--border-primary)] pt-8"
                >
                    {heroStats.map((stat) => (
                        <div key={stat.label} className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-[var(--accent)]">
                                {stat.value}
                            </span>
                            <span className="text-sm text-[var(--text-tertiary)] uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}