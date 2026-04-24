import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Ready to Build?",
  description = "Let's discuss how Tasguard Solutions can help you achieve your goals and scale your technology infrastructure.",
  buttonText = "Get in Touch",
  buttonLink = "/team"
}: CTASectionProps) {
  return (
    <section className="neu-section bg-[var(--dark)] text-[var(--dark-text)] min-h-[60vh] flex flex-col items-center justify-center border-b-4 border-black box-border">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-8 px-6">
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-title text-[var(--orange)] m-0 lowercase tracking-tighter" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '1' }}>
            {title}
          </h2>
          <div className="accent-bar w-24 h-2 bg-[var(--orange)]"></div>
        </div>

        <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-light leading-relaxed">
          {description}
        </p>

        <Link to={buttonLink} className="neu-btn primary scale-110 mt-4">
          {buttonText}
          <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
