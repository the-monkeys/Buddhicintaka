import type { Metadata } from "next";
import { Hero } from "../components/hero/Hero";
import HomeSections from "../components/home/HomeSections";
import CTA from "../components/CTA";
import { COMPANY_DESCRIPTION } from "../data/company";

export const metadata: Metadata = {
  title: {
    absolute: "Buddhicintaka | Software from Muzaffarpur, Bihar",
  },
  description: COMPANY_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeSections />
      <CTA />
    </div>
  );
}
