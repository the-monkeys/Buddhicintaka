import { PRODUCTS } from "./company";

export const featuredProducts = [
    {
        name: PRODUCTS.monkeys.name,
        href: "/products/monkeys",
        image: "/work/monkeys-landing.png",
        alt: "Article feed on the Monkeys website",
        summary: PRODUCTS.monkeys.description,
    },
    {
        name: PRODUCTS.aasriva.name,
        href: "/products/aasriva",
        image: "/work/aasriva-shop.png",
        alt: "Products and category filters in the Aasriva shop",
        summary: PRODUCTS.aasriva.description,
    },
] as const;
