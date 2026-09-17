export interface TeamMember {
    name: string;
    role: string;
    image: string; // path in /public/team/
    github?: string;
    linkedin?: string;
}

// Add your team members here with their photos in /public/team/
export const teamMembers: TeamMember[] = [
    {
        name: "Dave",
        role: "Managing Director & CEO",
        image: "/team/dave.jpg",
        github: "https://github.com/the-monkeys",
    },
    // Add more team members as you get their photos:
    // {
    //     name: "Member Name",
    //     role: "Role Title",
    //     image: "/team/member.jpg",
    //     github: "https://github.com/username",
    // },
];

export interface WorkShowcase {
    title: string;
    description: string;
    image: string; // path in /public/work/
    link?: string;
}

// Add screenshots / images of work you're doing
export const workShowcase: WorkShowcase[] = [
    {
        title: "Monkeys Platform",
        description: "Community-driven content platform for meaningful articles.",
        image: "/work/Gemini_Generated_Image_pwpr82pwpr82pwpr.png",
        link: "https://monkeys.com.co",
    },
    {
        title: "Product work",
        description: "Identity, notifications, and platform surfaces we ship for real users.",
        image: "/work/Screenshot.png",
        link: "https://identity.monkeys.support/",
    },
    {
        title: "FreeRange Notify",
        description: "Multi-channel notification service with SSE support.",
        image: "/work/freerange-notify.png",
        link: "https://freerangenotify.vercel.app",
    },
];
