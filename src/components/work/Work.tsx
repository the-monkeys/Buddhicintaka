import * as motion from "motion/react-client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { workShowcase } from "../team/teamData";

const Work = () => {
    return (
        <section id="work" className="py-24 sm:py-32 bg-[var(--bg-secondary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="section-label mb-5">Insights &amp; work</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] tracking-tight mb-4 leading-[1.15]">
                    What we&apos;re building.
                </h2>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-14">
                    Live platforms and product surfaces from the work we ship.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {workShowcase.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group"
                        >
                            <div className="relative aspect-[16/10] mb-5 overflow-hidden bg-[var(--bg-tertiary)]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                                {item.description}
                            </p>
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="accent-link text-sm"
                                >
                                    View live
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            )}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
