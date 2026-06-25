import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 z-10 relative">
        <div className="inline-block px-3 py-1 border border-outline/30 rounded-full font-label-sm text-[length:var(--text-label-sm)] text-primary mb-4 bg-surface-container/50 backdrop-blur-sm">
          Enterprise Grade Architecture
        </div>
        <h1 className="font-headline-xl text-[length:var(--text-headline-xl)] text-on-surface max-w-2xl leading-tight">
          Premium Software Solutions for Modern Enterprises
        </h1>
        <p className="font-body-md text-[length:var(--text-body-md)] text-on-surface-variant max-w-xl">
          We architect, build, and scale resilient digital infrastructure for discerning organizations that demand technical mastery and strategic precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/services"
            className="bg-primary-container text-on-primary-container px-8 py-3 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] text-center"
          >
            Explore Services
          </Link>
          <button className="border border-outline/50 text-on-surface px-8 py-3 rounded-DEFAULT hover:border-primary hover:text-primary transition-all duration-300 bg-transparent text-center cursor-pointer">
            View Process
          </button>
        </div>
      </div>
      
      {/* Hero Graphic */}
      <div className="relative h-[500px] w-full rounded-xl overflow-hidden border border-outline/10 bg-surface-container-low group">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-lowest z-0"></div>
        {/* Abstract Technical Grid Pattern */}
        <div 
          className="absolute inset-0 z-10 opacity-20" 
          style={{ backgroundImage: 'radial-gradient(var(--color-outline) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>
        {/* Glowing Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full z-20 group-hover:bg-primary/20 transition-all duration-1000"></div>
        {/* Foreground Architectural Elements */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border border-primary/30 rotate-45 transform transition-transform duration-700 group-hover:rotate-90"></div>
            <div className="absolute inset-4 border border-outline/20 rotate-12"></div>
            <div className="absolute inset-8 border border-primary/40 -rotate-12 bg-surface-container-low/50 backdrop-blur-md flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-5xl font-light">code_blocks</span>
            </div>
          </div>
        </div>
        {/* Decorative Frame Lines */}
        <div className="absolute top-0 left-8 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent z-40"></div>
        <div className="absolute bottom-8 right-0 h-px w-16 bg-gradient-to-l from-primary/50 to-transparent z-40"></div>
      </div>
    </section>
  );
}
