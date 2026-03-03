import { Hero } from "../components/hero/Hero";
import IdentityBanner from "../components/coreValues/IdentityBanner";
import Principles from "../components/coreValues/Principles";
import Products from "../components/products/Products";
import Services from "../components/Services";
import Infrastructure from "../components/Infastructure/Infra";

export default function Home() {
  return (
    <div>
      <Hero />
      <IdentityBanner />
      <Principles />
      <Products />
      <Services />
      <Infrastructure />
    </div>
  );
}
