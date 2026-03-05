import * as motion from "motion/react-client";
import Image from "next/image";

const Partners = () => {
    return (
        <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-12">
                    <span className="text-[var(--text-tertiary)] text-xs font-semibold tracking-[0.2em] uppercase">
                        Trusted By
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
                    <motion.a
                        href="https://gem.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-[var(--border-primary)] hover:border-[var(--accent-border)] transition-all"
                    >
                        <div className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors font-bold text-sm">
                            GeM
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">Government e-Marketplace</p>
                            <p className="text-xs text-[var(--text-tertiary)]">Registered Vendor</p>
                        </div>
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-[var(--border-primary)] hover:border-[var(--accent-border)] transition-all"
                    >
                        <Image
                            src="/circuit-nation.png"
                            width={40}
                            height={40}
                            alt="Circuit Nation"
                            className="rounded-lg"
                            draggable={false}
                        />
                        <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">Circuit Nation</p>
                            <p className="text-xs text-[var(--text-tertiary)]">Media Partner</p>
                        </div>
                    </motion.div>

                    <motion.a
                        href="https://github.com/the-monkeys"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-[var(--border-primary)] hover:border-[var(--accent-border)] transition-all"
                    >
                        <div className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors font-bold text-xs">
                            41+
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">Open Source Community</p>
                            <p className="text-xs text-[var(--text-tertiary)]">GitHub Followers</p>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Partners;
