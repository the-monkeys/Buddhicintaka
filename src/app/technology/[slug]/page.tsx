import { pageMetadata } from "../../../data/pageMetadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageLayout } from "../../../components/services/TopicPageLayout";
import { getTechnologyPage, technologyPages } from "../../../data/technology";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return technologyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getTechnologyPage(slug);
    if (!page) return {};
    return pageMetadata(`/technology/${page.slug}`, page.title, page.description);
}

export default async function TechnologyTopicPage({ params }: PageProps) {
    const { slug } = await params;
    const page = getTechnologyPage(slug);
    if (!page) notFound();

    return (
        <TopicPageLayout
            eyebrow="Technology"
            title={page.title}
            lede={page.lede}
            focus={page.focus}
            related={page.related}
            path={`/technology/${page.slug}`}
            parent={{ name: "Technology", path: "/technology" }}
        />
    );
}
