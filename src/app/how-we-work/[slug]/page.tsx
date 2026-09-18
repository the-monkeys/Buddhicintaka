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
    return {
        title: page.title,
        description: page.description,
        alternates: { canonical: `/how-we-work/${page.slug}` },
        openGraph: {
            title: `${page.title} | Buddhicintaka`,
            description: page.description,
            url: `/how-we-work/${page.slug}`,
            locale: "en_IN",
        },
    };
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
            path={`/how-we-work/${page.slug}`}
            parent={{ name: "How we work", path: "/how-we-work" }}
        />
    );
}
