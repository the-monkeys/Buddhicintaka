import * as motion from "motion/react-client";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
    {
        title: "Custom Software Development",
        description: "Full-stack web and mobile application development, API design, and microservices architecture.",
        items: ["System Architecture Design", "Full-Stack Engineering", "API & Microservices", "Performance Optimization"],
    },
    {
        title: "Identity & Access Management",
        description: "Enterprise IAM solutions with SSO, MFA, and policy-based access control built on our own IAM platform.",
        items: ["Zero Trust Security", "SSO & Federation", "RBAC / ABAC / PBAC", "Multi-Factor Authentication"],
    },
    {
        title: "Notification Infrastructure",
        description: "Multi-channel notification systems handling push, email, SMS, and real-time Server-Sent Events.",
        items: ["Multi-Channel Delivery", "Real-Time SSE", "Multi-Tenant Support", "Prometheus Monitoring"],
    },
    {
        title: "Platform Engineering",
        description: "DevOps, containerization, CI/CD pipeline setup, and infrastructure automation.",
        items: ["Docker & Containers", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"],
    },
    {
        title: "Training & Consultancy",
        description: "Technical training on modern software development practices for teams and individuals.",
        items: ["Go & TypeScript", "Cloud Architecture", "DevOps Practices", "Security Best Practices"],
    },
    {
        title: "Outsourcing",
        description: "Dedicated engineering teams and staff augmentation to help companies scale development capacity quickly.",
        items: ["Dedicated Development Teams", "Staff Augmentation", "Project-Based Delivery", "Remote Engineering Support"],
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 sm:py-28 bg-(--bg-surface) overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="mb-16">
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-(--text-on-light) mb-4">
                        How we help.
                    </h2>
                    <p className="text-lg text-(--text-on-light-muted) max-w-3xl leading-relaxed">
                        We leverage our deep open-source experience to help enterprises
                        build, scale, and maintain critical software infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-(--bg-surface-muted) border border-(--border-on-light) rounded-xl p-7 hover:border-(--accent-border) transition-all duration-200 group"
                        >
                            <h3 className="text-lg font-bold text-(--text-on-light) mb-3 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-(--text-on-light-muted) mb-5 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2.5 mb-6">
                                {service.items.map((item) => (
                                    <li key={item} className="flex items-center text-sm text-(--text-on-light)">
                                        <CheckCircle2 className="w-4 h-4 text-accent mr-2.5 shrink-0 opacity-60" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center text-(--text-on-light) font-semibold hover:text-accent transition-colors group"
                    >
                        Talk to us about your project
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
