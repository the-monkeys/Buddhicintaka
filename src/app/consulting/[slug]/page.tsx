import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageLayout } from "../../../components/services/TopicPageLayout";
import { consultingPages, getConsultingPage } from "../../../data/consulting";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return consultingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getConsultingPage(slug);
    if (!page) return {};
    return {
        title: page.title,
        description: page.description,
        alternates: { canonical: `/consulting/${page.slug}` },
        openGraph: {
            title: `${page.title} | Buddhicintaka`,
            description: page.description,
            url: `/consulting/${page.slug}`,
            locale: "en_IN",
        },
    };
}

export default async function ConsultingTopicPage({ params }: PageProps) {
    const { slug } = await params;
    const page = getConsultingPage(slug);
    if (!page) notFound();

    return (
        <TopicPageLayout
            eyebrow="Consulting"
            title={page.title}
            lede={page.lede}
            focus={page.focus}
            path={`/consulting/${page.slug}`}
            parent={{ name: "Consulting", path: "/consulting" }}
        />
    );
}
