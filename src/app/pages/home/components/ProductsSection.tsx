import { Link } from "react-router";

export function ProductsSection() {
  return (
    <section className="space-y-16">
      <div className="space-y-4">
        <h2 className="font-headline-lg text-[length:var(--text-headline-lg)] text-on-surface">Core Capabilities</h2>
        <p className="font-body-md text-[length:var(--text-body-md)] text-on-surface-variant max-w-2xl">
          Engineered for resilience and scale, our services span the full lifecycle of enterprise application development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {/* Service Card 1 */}
        <div className="md:col-span-2 bg-surface-container-low border border-outline/10 p-8 rounded-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full"></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">architecture</span>
              <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface mb-2">System Architecture</h3>
              <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant max-w-md">
                Design of scalable, fault-tolerant microservices and cloud-native topologies that form the backbone of modern operations.
              </p>
            </div>
            <Link to="/services" className="font-label-sm text-[length:var(--text-label-sm)] text-primary flex items-center gap-2 w-max group-hover:gap-3 transition-all">
              Learn more <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">security</span>
              <h3 className="font-label-md text-[length:var(--text-label-md)] text-on-surface mb-2 font-bold uppercase tracking-wider">Security First</h3>
              <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
                Integration of zero-trust paradigms and proactive threat modeling into the deployment pipeline.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>

        {/* Service Card 3 */}
        <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">database</span>
              <h3 className="font-label-md text-[length:var(--text-label-md)] text-on-surface mb-2 font-bold uppercase tracking-wider">Data Engineering</h3>
              <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
                Robust pipelines for high-throughput ingestion, transformation, and analytical querying.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 4 */}
        <div className="md:col-span-2 bg-surface-container-low border border-outline/10 p-8 rounded-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex items-center justify-between">
          <div className="relative z-10 max-w-md">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">terminal</span>
            <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface mb-2">Custom Development</h3>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              Precision-crafted software utilizing modern stacks (React, Node, Go) tailored to unique business logic.
            </p>
          </div>
          <div className="hidden md:flex w-32 h-32 border-2 border-dashed border-outline/20 rounded-full items-center justify-center animate-[spin_60s_linear_infinite]">
            <div className="w-16 h-16 border border-primary/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
