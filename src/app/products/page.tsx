import * as motion from "motion/react-client";
import { ExternalLink, Github } from 'lucide-react';

import { projectsData } from "./constants";

const ProductsGrid = () => {

    return (
        <section id="projects" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                        Products That Make Us Proud
                    </h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Explore our open-source contributions and the technologies we build
                        with.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className={`bg-white rounded-2xl p-8 border-2 ${project.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full`}
                        >
                            <h3 className="text-xl font-bold text-stone-900 mb-4">
                                {project.title}
                            </h3>

                            <p className="text-stone-600 mb-6 grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full border border-stone-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/the-monkeys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-stone-900 font-semibold hover:text-amber-600 transition-colors border-b-2 border-stone-900 hover:border-amber-600 pb-1"
                    >
                        View all repositories on GitHub{' '}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    )
}
function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

export default ProductsGrid;
