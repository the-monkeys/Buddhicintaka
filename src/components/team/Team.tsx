import * as motion from "motion/react-client";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { teamMembers } from "./teamData";

const Team = () => {
    const member = teamMembers[0];

    if (!member) return null;

    return (
        <section id="team" className="py-24 sm:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="section-label mb-5">Leadership</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] tracking-tight mb-16 max-w-3xl leading-[1.15]">
                    Progress, one customer at a time.
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                    <div className="md:col-span-5 relative aspect-[4/5]">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-[50%_18%]"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                    <div className="md:col-span-7">
                        <blockquote className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] leading-snug mb-8">
                            &ldquo;The next era of technology in Bihar will be defined by
                            software we can inspect, people we can train, and systems
                            organisations can actually run.&rdquo;
                        </blockquote>
                        <p className="text-[var(--text-primary)] font-semibold">{member.name}</p>
                        <p className="text-[var(--text-secondary)] mb-6">{member.role}</p>
                        <div className="flex gap-3">
                            {member.github && (
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                            )}
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
