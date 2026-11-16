import { pageMetadata } from "../../../data/pageMetadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompanyStoryLayout } from "../../../components/company/CompanyStoryLayout";
import { getCompanyStory } from "../../../data/people";

const routed = ["culture", "history", "purpose", "inclusion"] as const;

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return routed.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getCompanyStory(slug);
    if (!page) return {};
    return pageMetadata(`/company/${page.slug}`, page.title, page.description);
}

export default async function CompanyStoryPage({ params }: PageProps) {
    const { slug } = await params;
    if (!routed.includes(slug as (typeof routed)[number])) notFound();
    const page = getCompanyStory(slug);
    if (!page) notFound();

    return (
        <CompanyStoryLayout
            eyebrow={page.eyebrow}
            title={page.title}
            lede={page.lede}
            sections={page.sections}
            path={`/company/${page.slug}`}
        />
    );
}
