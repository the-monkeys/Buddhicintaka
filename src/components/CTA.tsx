import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

const CTA = () => {
    return (
        <section id="cta" className="py-20 sm:py-28 bg-[var(--bg-primary)] relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[200px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                            Ready to build something{" "}
                            <br className="hidden sm:block" />
                            extraordinary?
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                            Let's talk about your next project. We bring open-source
                            innovation and enterprise reliability to everything we build.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex flex-col gap-4 w-full">
                        <a
                            href="/contact"
                            className="w-full py-4 bg-[var(--accent)] text-white text-lg font-bold rounded-lg hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-3 group"
                        >
                            Start a Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/careers"
                            className="w-full py-4 bg-transparent border border-[var(--border-secondary)] text-[var(--text-primary)] text-lg font-bold rounded-lg hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all flex items-center justify-center"
                        >
                            Explore Careers
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
