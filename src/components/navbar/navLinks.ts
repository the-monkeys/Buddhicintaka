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
        href: '/#services',
        hasDropdown: true,
    },
    {
        name: 'Careers',
        href: '/careers',
    },
    {
        name: 'Contact Us',
        href: '/contact',
    },
];
