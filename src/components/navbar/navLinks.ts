export interface NavLink {
    name: string;
    href: string;
    hasDropdown?: boolean;
}

export const navLinks: NavLink[] = [
    {
        name: 'Products',
        href: '/products',
        hasDropdown: true,
    },
    {
        name: 'Services',
        href: '#services',
        hasDropdown: true,
    },
    {
        name: 'Open Source',
        href: '#projects',
    },
    {
        name: 'Careers',
        href: '#careers',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
];
