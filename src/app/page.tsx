import { pageMetadata } from "../data/pageMetadata";
import type { Metadata } from "next";
import { Hero } from "../components/hero/Hero";
import HomeSections from "../components/home/HomeSections";
import CTA from "../components/CTA";
import { COMPANY_DEFAULT_TITLE, COMPANY_DESCRIPTION } from "../data/company";

export const metadata: Metadata = pageMetadata(
    "/",
    COMPANY_DEFAULT_TITLE,
    COMPANY_DESCRIPTION,
);

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeSections />
      <CTA />
    </div>
  );
}
