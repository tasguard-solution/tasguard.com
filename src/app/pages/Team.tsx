export function Team() {
  const teamMembers = [
    {
      name: "Anointing Tamunowunari-Tasker",
      role: "Founder & CEO",
      bio: "Leading Tasguard Solutions to deliver innovative software products that make a difference.",
      website: "https://anointing.tasguard.com", 
      email: "tasker@tasguard.com",
      linkedin: "",
      github: "",
    },
    // Add more team members here as needed
  ];

  return (
    <div className="w-full flex flex-col space-y-32">
      {/* Hero Section */}
      <section className="space-y-8">
        <h1 className="font-headline-xl text-[length:var(--text-headline-xl)] text-on-surface">Meet Our Team</h1>
        <div className="border-l-4 border-primary pl-6">
          <p className="font-body-md text-[length:var(--text-body-md)] text-on-surface-variant max-w-3xl">
            The talented and driven engineers and architects behind Tasguard Solutions.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-surface-container-low border border-outline/10 p-8 rounded-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="w-20 h-20 bg-surface-container-high rounded-2xl flex items-center justify-center border border-outline/20 mb-6 font-headline-lg text-[length:var(--text-headline-lg)] text-primary">
              {member.name.charAt(0)}
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface">{member.name}</h3>
              <div className="font-label-sm text-[length:var(--text-label-sm)] text-primary uppercase tracking-widest mb-4">
                {member.role}
              </div>
              <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
                {member.bio}
              </p>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-outline/10">
              {member.website && (
                <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" title="Website">
                  <span className="material-symbols-outlined text-[20px]">language</span>
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" title="Email">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" title="LinkedIn">
                  <span className="material-symbols-outlined text-[20px]">business_center</span>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" title="GitHub">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Company Culture Section */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-headline-lg text-[length:var(--text-headline-lg)] text-on-surface">Our Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
            <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface">Innovation</h3>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              We constantly push boundaries to create cutting-edge solutions that solve real problems.
            </p>
          </div>
          <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl">verified</span>
            <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface">Quality</h3>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              Every product we deliver meets the highest standards of excellence and reliability.
            </p>
          </div>
          <div className="bg-surface-container-low border border-outline/10 p-8 rounded-lg text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary text-4xl">handshake</span>
            <h3 className="font-headline-lg-mobile text-[length:var(--text-headline-lg-mobile)] text-on-surface">Partnership</h3>
            <p className="font-body-sm text-[length:var(--text-body-sm)] text-on-surface-variant">
              We work closely with our clients to ensure their success is our success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
