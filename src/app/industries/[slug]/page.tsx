import { pageMetadata } from "../../../data/pageMetadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageLayout } from "../../../components/services/TopicPageLayout";
import { getIndustryPage, industryPages } from "../../../data/industries";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getIndustryPage(slug);
    if (!page) return {};
    return pageMetadata(`/industries/${page.slug}`, page.title, page.description);
}

export default async function IndustryTopicPage({ params }: PageProps) {
    const { slug } = await params;
    const page = getIndustryPage(slug);
    if (!page) notFound();

    return (
        <TopicPageLayout
            eyebrow="Industries"
            title={page.title}
            lede={page.lede}
            focus={page.focus}
            related={page.related}
            path={`/industries/${page.slug}`}
            parent={{ name: "Industries", path: "/industries" }}
        />
    );
}
