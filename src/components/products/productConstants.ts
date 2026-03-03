import { Shield, Bell, PenTool } from "lucide-react";

export const productConstants = [
    {
        title: 'Monkeys IAM',
        description: 'A world-class, industry-level Identity and Access Management system built in Golang, designed to provide enterprise-grade security, scalability, and flexibility for modern applications.',
        icon: Shield,
        color: 'bg-amber-100 text-amber-600',
        link: 'https://github.com/the-monkeys/monkeys-identity',
    },
    {
        title: 'Freerange Notify',
        description: 'A generic, pluggable notification service built in Go that provides real-time, multi-channel notification capabilities for any application. Email, SMS, Push - all in one API.',
        icon: Bell,
        color: 'bg-orange-100 text-orange-600',
        link: 'https://github.com/the-monkeys/freerangenotify',
    },
    {
        title: 'Monkeys',
        description: `We're more than just a writing platform. With collaborative writing tools, version control, and social snapshots, we've built the ultimate environment for expert articles and meaningful storytelling.`,
        icon: PenTool,
        color: 'bg-yellow-100 text-yellow-600',
        link: 'https://monkeys.com.co',
    },
];