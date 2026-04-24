import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="home-split border-b-4 border-black">
      <div className="home-side-left">
        <div className="home-left-content">
          <h1 className="big-title">
            <span>Innovative</span>
            <span>Software</span>
            <span className="highlight">Solutions</span>
          </h1>
          <div className="accent-bar"></div>
          <p className="text-lg opacity-80 max-w-md font-[var(--body)] font-light leading-relaxed mb-8">
            Tasguard Solutions delivers cutting-edge software that empowers companies to work smarter and achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="neu-btn primary">
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/team" className="neu-btn">
              Meet Team
            </Link>
          </div>
        </div>
      </div>
      <div className="home-side-right">
        <div className="home-image-wrapper">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwYmx1ZXxlbnwxfHx8fDE3NzI0MDI2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Technology Abstract"
          />
        </div>
      </div>
    </section>
  );
}
