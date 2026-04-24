import { Shield, Zap, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import "./Services.css";

export function Services() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="section-title text-[var(--dark-text)] mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-80 border-l-4 border-[var(--orange)] pl-4 text-left inline-block">
            Discover the powerful software solutions that Tasguard brings to your business
          </p>
        </div>
      </section>

      {/* Attendix Section */}
      <section className="neu-section light">
        <div className="max-w-7xl mx-auto">
          <div className="service-block">
            <div className="service-content">
              <div className="neu-icon-wrapper mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-[var(--heading)] uppercase mb-6 leading-none">Attendix</h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8 font-light">
                Our flagship attendance management system designed to streamline workforce tracking,
                time management, and reporting for organizations of all sizes.
              </p>

              <h3 className="text-2xl font-[var(--heading)] uppercase mb-4 opacity-70">Key Features</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  <CheckCircle2 className="w-6 h-6 text-black check-icon" />
                  <span>Real-time attendance tracking and monitoring</span>
                </li>
                <li className="feature-item">
                  <CheckCircle2 className="w-6 h-6 text-black check-icon" />
                  <span>Automated reporting and analytics dashboard</span>
                </li>
                <li className="feature-item">
                  <CheckCircle2 className="w-6 h-6 text-black check-icon" />
                  <span>Multi-platform support (Web, Mobile, Desktop)</span>
                </li>
              </ul>
            </div>
            <div className="service-image-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjM5NTgxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Attendix System"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATC System Section */}
      <section className="neu-section bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="service-block reverse">
            <div className="service-image-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcyMzcxMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ATC System"
              />
            </div>
            <div className="service-content">
              <div className="neu-icon-wrapper mb-6" style={{ background: '#cfafff' }}>
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-[3rem] font-[var(--heading)] uppercase mb-6 leading-none">ATC</h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8 font-light">
                A sophisticated animation control system designed for game developers, animators,
                and creative professionals who need precise control.
              </p>

              <h3 className="text-2xl font-[var(--heading)] uppercase mb-4 opacity-70">Key Features</h3>
              <ul className="feature-list">
                <li className="feature-item" style={{ background: 'var(--bg)' }}>
                  <CheckCircle2 className="w-6 h-6 text-black check-icon" />
                  <span>Advanced trigger system for complex animations</span>
                </li>
                <li className="feature-item" style={{ background: 'var(--bg)' }}>
                  <CheckCircle2 className="w-6 h-6 text-black check-icon" />
                  <span>State machine management with visual editor</span>
                </li>
                <li className="feature-item" style={{ background: 'var(--bg)' }}>
                  <CheckCircle2 className="w-6 h-6 text-black check-icon" />
                  <span>Seamless integration with Unity and Unreal Engine</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="neu-section light text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="accent-bar mx-auto"></div>
          </div>

          <div className="neu-grid" style={{ marginTop: 0 }}>
            <div className="neu-card">
              <h3 className="neu-card-title text-3xl">Expertise</h3>
              <p className="neu-card-desc">
                Years of experience developing robust software solutions built to scale.
              </p>
            </div>
            <div className="neu-card">
              <h3 className="neu-card-title text-3xl">Support</h3>
              <p className="neu-card-desc">
                Ongoing maintenance, updates, and dedicated customer support around the clock.
              </p>
            </div>
            <div className="neu-card">
              <h3 className="neu-card-title text-3xl">Innovation</h3>
              <p className="neu-card-desc">
                We provide the bleeding edge to give you an unfair advantage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
