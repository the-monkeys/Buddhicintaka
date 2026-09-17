import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import { trainingTracks } from "./constant";

const Edutainment = () => {
    return (
        <section id="training" className="scroll-mt-20 py-24 sm:py-32 bg-[var(--bg-secondary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="section-label mb-5">Classes &amp; workshops</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-6 leading-[1.15] tracking-tight">
                            Is your workforce ready for AI?
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                            Tech classes for teams and learners. Hands-on workshops on
                            modern technology and AI for students and working professionals
                            - on campus or with your company.
                        </p>
                        <a href="/contact" className="accent-link">
                            Book a workshop
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div>
                        {trainingTracks.map((track, index) => (
                            <motion.div
                                key={track.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                className="py-6 border-t border-[var(--border-primary)] last:border-b"
                            >
                                <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                                    {track.title}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    {track.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Edutainment;
