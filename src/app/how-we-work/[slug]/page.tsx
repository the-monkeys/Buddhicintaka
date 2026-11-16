import { pageMetadata } from "../../../data/pageMetadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageLayout } from "../../../components/services/TopicPageLayout";
import { getHowWeWorkPage, howWeWorkPages } from "../../../data/consulting";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return howWeWorkPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getHowWeWorkPage(slug);
    if (!page) return {};
    return pageMetadata(`/how-we-work/${page.slug}`, page.title, page.description);
}

export default async function HowWeWorkPage({ params }: PageProps) {
    const { slug } = await params;
    const page = getHowWeWorkPage(slug);
    if (!page) notFound();

    return (
        <TopicPageLayout
            eyebrow="How we work"
            title={page.title}
            lede={page.lede}
            focus={page.focus}
            related={page.related}
            path={`/how-we-work/${page.slug}`}
            parent={{ name: "How we work", path: "/how-we-work" }}
        />
    );
}
