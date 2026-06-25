import { HeroSection } from "./home/components/HeroSection";
import { ProductsSection } from "./home/components/ProductsSection";
import { ProcessSection } from "./home/components/ProcessSection";

export function Home() {
  return (
    <div className="w-full flex flex-col space-y-32">
      <HeroSection />
      <ProductsSection />
      <ProcessSection />
    </div>
  );
}
