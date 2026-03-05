import * as motion from "motion/react-client";

interface BlockQuoteProps {
    quote: string;
    attribution: string;
    role?: string;
}

const BlockQuote = ({ quote, attribution, role }: BlockQuoteProps) => {
    return (
        <section className="py-20 sm:py-24 bg-[var(--bg-tertiary)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
            >
                <div className="w-12 h-[2px] bg-[var(--accent)] mx-auto mb-10" />
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--text-primary)] leading-relaxed italic mb-8">
                    &ldquo;{quote}&rdquo;
                </blockquote>
                <div>
                    <span className="text-[var(--text-secondary)] text-sm font-medium">
                        — {attribution}
                    </span>
                    {role && (
                        <span className="text-[var(--text-tertiary)] text-sm ml-2">
                            {role}
                        </span>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default BlockQuote;
