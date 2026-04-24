import { Link } from "react-router";
import { ArrowRight, Zap, Shield } from "lucide-react";

export function ProductsSection() {
  const services = [
    {
      name: "Attendix",
      description: "Our flagship attendance management system designed to streamline workforce tracking and reporting.",
      icon: Shield,
    },
    {
      name: "ATC System",
      description: "Animator Trigger Controller - A powerful animation control system for game developers and creators.",
      icon: Zap,
    },
  ];

  return (
    <section className="neu-section bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">Products</h2>
          <p className="section-subtitle">
            Discover the solutions we offer to transform your business operations and workflows.
          </p>
        </div>

        <div className="neu-grid" style={{ marginTop: '3rem' }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.name} className="neu-card bg-white">
                <div className="neu-icon-wrapper bg-white">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="neu-card-title">{service.name}</h3>
                <p className="neu-card-desc">{service.description}</p>
                <div>
                  <Link to="/services" className="neu-link">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
