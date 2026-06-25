export function ProcessSection() {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <h2 className="font-headline-lg text-[length:var(--text-headline-lg)] text-on-surface">The Tasguard Framework</h2>
        <p className="font-body-md text-[length:var(--text-body-md)] text-on-surface-variant max-w-2xl">
          A disciplined, methodology-driven approach to software engineering ensures predictable delivery and uncompromising quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="border-t border-primary/30 pt-8 relative">
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-primary -translate-y-[1px]"></div>
          <div className="font-label-sm text-[length:var(--text-label-sm)] text-primary mb-4 font-bold tracking-widest">01</div>
          <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface mb-4">Consult & Architect</h3>
          <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
            Rigorous requirements gathering and technical specification. We map business domains to software architecture before writing a single line of code.
          </p>
        </div>

        {/* Step 2 */}
        <div className="border-t border-outline/20 pt-8 relative">
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-on-surface-variant -translate-y-[1px]"></div>
          <div className="font-label-sm text-[length:var(--text-label-sm)] text-on-surface-variant mb-4 font-bold tracking-widest">02</div>
          <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface mb-4">Develop & Iterate</h3>
          <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
            Agile sprints governed by strict CI/CD pipelines, automated testing, and mandatory peer reviews to ensure code integrity.
          </p>
        </div>

        {/* Step 3 */}
        <div className="border-t border-outline/20 pt-8 relative">
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-on-surface-variant -translate-y-[1px]"></div>
          <div className="font-label-sm text-[length:var(--text-label-sm)] text-on-surface-variant mb-4 font-bold tracking-widest">03</div>
          <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface mb-4">Deploy & Scale</h3>
          <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
            Seamless containerized deployments to cloud infrastructure, backed by continuous monitoring, alerting, and SLA-driven support.
          </p>
        </div>
      </div>
    </section>
  );
}
