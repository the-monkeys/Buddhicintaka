import type { MetadataRoute } from "next";
import { SITE_URL } from "../data/company";
import { consultingPages, howWeWorkPages } from "../data/consulting";
import { industryPages } from "../data/industries";
import { companyStories } from "../data/people";
import { developerProducts } from "../data/products";
import { technologyPages } from "../data/technology";

export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [
        "/", "/about", "/products", "/products/monkeys", "/products/aasriva",
        "/consulting", "/how-we-work", "/technology", "/industries",
        "/careers", "/early-careers", "/contact", "/leadership", "/team", "/press", "/investors",
        ...developerProducts.map(({ detail }) => `/products/${detail.slug}`),
        ...consultingPages.map(({ slug }) => `/consulting/${slug}`),
        ...howWeWorkPages.map(({ slug }) => `/how-we-work/${slug}`),
        ...technologyPages.map(({ slug }) => `/technology/${slug}`),
        ...industryPages.map(({ slug }) => `/industries/${slug}`),
        ...companyStories.filter(({ slug }) => slug !== "early-careers").map(({ slug }) => `/company/${slug}`),
    ];
    return paths.map((path) => ({ url: new URL(path, SITE_URL).href }));
}
