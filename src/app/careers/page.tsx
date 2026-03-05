import * as motion from "motion/react-client";
import { ArrowRight, Users, Heart, Zap } from 'lucide-react';

const Careers = () => {
    const jobs = [
        {
            title: 'Senior Backend Engineer',
            type: 'Full-time',
            location: 'Remote',
            tech: 'Go / Rust',
            description:
                'Architect scalable systems for our core IAM and notification services.',
        },
        {
            title: 'Frontend Developer',
            type: 'Full-time',
            location: 'Remote',
            tech: 'React / TypeScript',
            description:
                'Build intuitive interfaces for our developer tools and client projects.',
        },
        {
            title: 'DevOps Engineer',
            type: 'Contract',
            location: 'Remote',
            tech: 'Kubernetes / Bare Metal',
            description: 'Manage our self-hosted infrastructure and CI/CD pipelines.',
        },
        {
            title: 'Technical Writer',
            type: 'Part-time',
            location: 'Remote',
            tech: 'Markdown / Docs',
            description:
                'Create world-class documentation for our open-source projects.',
        },
    ]
    return (
        <section
            id="careers"
            className="py-24 bg-linear-to-br from-amber-50 to-orange-50 relative overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 mb-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                            Shape the Future <br />
                            <span className="text-amber-600">With Us.</span>
                        </h2>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            Join a community-driven team that values innovation, diversity,
                            and ethical impact. We build software that matters.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-amber-500">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900">Community First</h4>
                                    <p className="text-sm text-stone-600">
                                        Work on open-source projects used by thousands.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-amber-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900">High Performance</h4>
                                    <p className="text-sm text-stone-600">
                                        Solve complex engineering challenges.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-amber-500">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900">
                                        Inclusive Culture
                                    </h4>
                                    <p className="text-sm text-stone-600">
                                        Remote-first, diverse, and supportive.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 grid gap-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{
                                    opacity: 0,
                                    x: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.1,
                                }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-stone-100 transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3 text-sm text-stone-500 mt-2 mb-3">
                                        <span className="bg-stone-100 px-2 py-1 rounded">
                                            {job.type}
                                        </span>
                                        <span className="bg-stone-100 px-2 py-1 rounded">
                                            {job.location}
                                        </span>
                                        <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded border border-amber-100">
                                            {job.tech}
                                        </span>
                                    </div>
                                    <p className="text-stone-600 text-sm max-w-md">
                                        {job.description}
                                    </p>
                                </div>
                                <button className="px-5 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2 whitespace-nowrap">
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;