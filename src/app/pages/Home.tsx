import "./Home.css";
import { HeroSection } from "./home/components/HeroSection";
import { AboutSection } from "./home/components/AboutSection";
import { ProductsSection } from "./home/components/ProductsSection";
import { CTASection } from "../components/CTASection";


export function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CTASection />
    </div>
  );
}
