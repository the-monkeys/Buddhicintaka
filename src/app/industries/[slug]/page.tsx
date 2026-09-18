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
    return {
        title: page.title,
        description: page.description,
        alternates: { canonical: `/industries/${page.slug}` },
        openGraph: {
            title: `${page.title} | Buddhicintaka`,
            description: page.description,
            url: `/industries/${page.slug}`,
            locale: "en_IN",
        },
    };
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
            path={`/industries/${page.slug}`}
            parent={{ name: "Industries", path: "/industries" }}
        />
    );
}
