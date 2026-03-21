import Hero from "../components/hero/Hero";
import IdentityBanner from "../components/coreValues/IdentityBanner";
import Principles from "../components/coreValues/Principles";
import EcosystemTree from "../components/tree/EcosystemTree";
import Products from "../components/products/Products";
import Services from "../components/services/Services";
import BlockQuote from "../components/BlockQuote";
import Infrastructure from "../components/Infrastructure/Infra";
import Partners from "../components/Partners";
import Edutainment from "../components/edutainment/Edutainment";
import FAQ from "../components/FAQ/Faqs";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      
      <IdentityBanner />
      <Principles />
      <EcosystemTree />
      <Products />
      
      <Infrastructure />
      <Partners />
      <Edutainment />
      <FAQ />

      <BlockQuote
        quote="Open source is not just a development model — it is a philosophy of collaboration that makes the world better."
        attribution="The Monkeys Community"
      />

      <CTA />
    </div>
  );
}
