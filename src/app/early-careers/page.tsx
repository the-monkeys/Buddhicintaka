import { Metadata } from "next";
import { CompanyStoryLayout } from "../../components/company/CompanyStoryLayout";
import { getCompanyStory } from "../../data/people";

const page = getCompanyStory("early-careers");

export const metadata: Metadata = {
    title: page?.title ?? "Early careers",
    description: page?.description,
    alternates: { canonical: "/early-careers" },
    openGraph: {
        title: "Early careers | Buddhicintaka",
        description: page?.description,
        url: "/early-careers",
        locale: "en_IN",
    },
};

export default function EarlyCareersPage() {
    if (!page) return null;
    return (
        <CompanyStoryLayout
            eyebrow={page.eyebrow}
            title={page.title}
            lede={page.lede}
            sections={page.sections}
            path="/early-careers"
        />
    );
}
