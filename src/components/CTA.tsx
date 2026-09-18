const CTA = () => {
    return (
        <section className="bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.08] max-w-4xl mb-10 text-[var(--text-primary)]">
                    Let&apos;s get there together.
                </h2>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                >
                    Consult an expert
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg leading-none">
                        +
                    </span>
                </a>
            </div>
        </section>
    );
};

export default CTA;
