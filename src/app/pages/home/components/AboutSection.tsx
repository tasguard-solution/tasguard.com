import { Code, Zap, Shield } from "lucide-react";

export function AboutSection() {
  return (
    <section className="neu-section light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">
            Tasguard Solutions is a registered solutions-based business specializing in software development.
            We create innovative tools and systems that solve real-world problems for companies of all sizes.
          </p>
        </div>

        <div className="neu-grid">
          <div className="neu-card">
            <div className="neu-icon-wrapper">
              <Code className="w-8 h-8 text-black" />
            </div>
            <h3 className="neu-card-title">Custom</h3>
            <p className="neu-card-desc">
              Tailored software designed specifically for your business needs, built with modern architecture.
            </p>
          </div>
          <div className="neu-card">
            <div className="neu-icon-wrapper">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h3 className="neu-card-title">Secure</h3>
            <p className="neu-card-desc">
              Enterprise-grade security and reliability you can trust to protect your valuable data and assets.
            </p>
          </div>
          <div className="neu-card">
            <div className="neu-icon-wrapper">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <h3 className="neu-card-title">Fast</h3>
            <p className="neu-card-desc">
              Optimized performance to keep your operations running smoothly without lag or downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
