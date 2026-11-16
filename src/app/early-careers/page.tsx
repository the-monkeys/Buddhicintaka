import { notFound } from "next/navigation";
import { pageMetadata } from "../../data/pageMetadata";
import { Metadata } from "next";
import { CompanyStoryLayout } from "../../components/company/CompanyStoryLayout";
import { getCompanyStory } from "../../data/people";

const page = getCompanyStory("early-careers");

export const metadata: Metadata = pageMetadata(
    "/early-careers",
    "Engineering workshops and early careers",
    "Start contributing to open-source software, explore AI training tracks or find early-career opportunities with our remote engineering team.",
);

export default function EarlyCareersPage() {
    if (!page) notFound();
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
