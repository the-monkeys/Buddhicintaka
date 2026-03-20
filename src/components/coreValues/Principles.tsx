import { ourPrinciples } from "./ourPrinciples";
import ScrollReveal from "../animation/ScrollReveal";

const Principles = () => {
    return (
        <section className="py-20 sm:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="mb-16">
                    <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                        Our Principles
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                        What drives us.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {ourPrinciples.map((item, index) => (
                        <ScrollReveal
                            key={item.number}
                            delay={index * 0.1}
                            className="group"
                        >
                            <span className="text-5xl md:text-6xl font-bold text-(--text-tertiary)/30 mb-4 block">
                                {item.number}
                            </span>
                            <div className="w-6 h-0.5 bg-brand mb-5" />
                            <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-secondary leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
