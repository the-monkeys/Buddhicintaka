import {
    awards,
    howWeHelp as help,
    insights,
    partners,
    stories,
    testimonials,
} from "../../data/homeContent";

export default function HomeSections() {
    return (
        <>
            <section
                className="bg-white py-16 sm:py-20"
                style={{ colorScheme: "only light" }}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-3 gap-10 md:gap-14">
                    {stories.map((story) => (
                        <a key={story.title} href={story.href} className="group">
                            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6b6b6b] mb-2">
                                {story.label}
                            </p>
                            <span className="block w-8 h-[2px] bg-[#ff4f3a] mb-4" />
                            <h2 className="text-xl sm:text-2xl font-medium text-[#1a1a1a] leading-snug group-hover:text-[#ff4f3a] transition-colors">
                                {story.title}
                            </h2>
                        </a>
                    ))}
                </div>
            </section>

            <section className="bg-[var(--bg-primary)] py-28 sm:py-36">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight leading-[1.08] text-[var(--text-primary)] max-w-5xl">
                        A technology company from Muzaffarpur, Bihar.
                    </h2>
                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                        We build software products used across India, including Monkeys
                        and Aasriva. Work happens in India, for customers and communities
                        across the country.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {awards.map((item, i) => (
                        <div key={item}>
                            <p className="text-sm text-[var(--text-tertiary)] mb-3">
                                0{i + 1}
                            </p>
                            <p className="text-[var(--text-primary)] leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[var(--bg-primary)] py-28 sm:py-36">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1] text-[var(--text-primary)]">
                            Progress, one customer at a time
                        </h2>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)]">
                            We work hand-in-hand with customers and strategic partners to
                            run and transform essential systems.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-28 sm:py-36">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="text-sm text-[var(--text-tertiary)] mb-4">
                        how we help
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] text-[var(--text-primary)] max-w-4xl">
                        Continuous innovation + operational excellence
                    </h2>
                    <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-14">
                        {help.map((item) => (
                            <div key={item.n}>
                                <p className="text-sm text-[var(--text-tertiary)] mb-3">
                                    {item.n}
                                </p>
                                <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#1a1a1a] text-white py-28 sm:py-36">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <blockquote className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] max-w-4xl">
                        We believe software should be transparent, community-driven,
                        and built to last, not locked behind walls.
                    </blockquote>
                    <p className="mt-8 text-sm tracking-[0.16em] uppercase text-white/50">
                        Founding Principle
                    </p>
                    <p className="mt-2 text-white/75">Buddhicintaka</p>
                </div>
            </section>

            <section className="bg-[var(--bg-primary)] py-24 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)] mb-10">
                        Trusted by our innovation partners
                    </h2>
                    <div className="flex flex-wrap gap-x-10 gap-y-4 text-[var(--text-secondary)]">
                        <span>Microsoft</span>
                        <span>Google</span>
                        <span>Amazon</span>
                        <span>Cisco</span>
                        <span>Red Hat</span>
                        <span>VMware</span>
                    </div>
                </div>
            </section>
        </>
    );
}
