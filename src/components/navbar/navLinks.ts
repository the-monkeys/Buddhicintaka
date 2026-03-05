export interface NavLink {
    name: string;
    href: string;
}

export const navLinks: NavLink[] = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/#services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];
