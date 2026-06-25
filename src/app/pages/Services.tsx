export function Services() {
  return (
    <div className="w-full flex flex-col space-y-32">
      {/* Hero Section */}
      <section className="space-y-8">
        <h1 className="font-headline-xl text-[length:var(--text-headline-xl)] text-on-surface">Our Services</h1>
        <div className="border-l-4 border-primary pl-6">
          <p className="font-body-md text-[length:var(--text-body-md)] text-on-surface-variant max-w-3xl">
            Discover the powerful software solutions that Tasguard brings to your enterprise, engineered for resilience and unparalleled scalability.
          </p>
        </div>
      </section>

      {/* Attendix Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center border border-outline/20">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          </div>
          <div>
            <h2 className="font-headline-lg text-[length:var(--text-headline-lg)] text-on-surface mb-4">Attendix</h2>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              Our flagship attendance management system designed to streamline workforce tracking, time management, and reporting for organizations of all sizes.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-outline/10">
            <h3 className="font-label-md text-[length:var(--text-label-md)] text-on-surface uppercase tracking-widest">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                <span className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">Real-time attendance tracking and monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                <span className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">Automated reporting and analytics dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                <span className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">Multi-platform support (Web, Mobile, Desktop)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden border border-outline/10 bg-surface-container">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
          {/* Mockup Graphic Placeholder */}
          <div className="absolute inset-8 border border-outline/20 rounded-lg bg-surface-container-lowest/50 backdrop-blur-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-outline text-6xl">dashboard</span>
          </div>
        </div>
      </section>

      {/* ATC System Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden border border-outline/10 bg-surface-container">
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent"></div>
          {/* Mockup Graphic Placeholder */}
          <div className="absolute inset-8 border border-outline/20 rounded-lg bg-surface-container-lowest/50 backdrop-blur-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-outline text-6xl">animation</span>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center border border-outline/20">
            <span className="material-symbols-outlined text-tertiary text-3xl">bolt</span>
          </div>
          <div>
            <h2 className="font-headline-lg text-[length:var(--text-headline-lg)] text-on-surface mb-4">ATC</h2>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              A sophisticated animation control system designed for game developers, animators, and creative professionals who need precise control.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-outline/10">
            <h3 className="font-label-md text-[length:var(--text-label-md)] text-on-surface uppercase tracking-widest">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-xl mt-0.5">check_circle</span>
                <span className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">Advanced trigger system for complex animations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-xl mt-0.5">check_circle</span>
                <span className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">State machine management with visual editor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-xl mt-0.5">check_circle</span>
                <span className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">Seamless integration with Unity and Unreal Engine</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-headline-lg text-[length:var(--text-headline-lg)] text-on-surface">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
            <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface">Expertise</h3>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              Years of experience developing robust software solutions built to scale.
            </p>
          </div>
          <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl">support_agent</span>
            <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface">Support</h3>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              Ongoing maintenance, updates, and dedicated customer support around the clock.
            </p>
          </div>
          <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl">lightbulb</span>
            <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface">Innovation</h3>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              We provide the bleeding edge to give you an unfair advantage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
