const About = () => {
    return (
        <section className="py-24 sm:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="section-label mb-5">About</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] leading-[1.15] mb-6 tracking-tight">
                    Built in Bihar.
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-5">
                    Buddhicintaka (OPC) Private Limited is a technology company
                    based in Muzaffarpur, Bihar, India.
                </p>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    Inspire, Inform, Innovate.
                </p>
            </div>
        </section>
    );
};

export default About;
