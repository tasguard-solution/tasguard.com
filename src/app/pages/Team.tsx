import { ExternalLink, Mail, Linkedin, Github } from "lucide-react";
import "./Team.css";

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
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1 className="section-title text-[var(--dark-text)] mb-6">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-80 border-l-4 border-[var(--orange)] pl-4 text-left inline-block">
            The talented and driven people behind Tasguard Solutions
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="neu-section bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="neu-grid" style={{ marginTop: '0' }}>
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card bg-white">
                <div className="team-avatar">
                  {member.name.charAt(0)}
                </div>

                <div>
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">
                    {member.role}
                  </div>
                  <p className="team-bio">{member.bio}</p>
                </div>

                <div className="team-links">
                  {member.website && (
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="team-link-item">
                      <ExternalLink className="w-5 h-5" /> Website
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="team-link-item">
                      <Mail className="w-5 h-5" /> Email
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-link-item">
                      <Linkedin className="w-5 h-5" /> LinkedIn
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="team-link-item">
                      <Github className="w-5 h-5" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="neu-section light text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="section-title">Our Values</h2>
            <div className="accent-bar mx-auto"></div>
          </div>

          <div className="neu-grid" style={{ marginTop: 0 }}>
            <div className="neu-card">
              <h3 className="neu-card-title text-3xl">Innovation</h3>
              <p className="neu-card-desc">
                We constantly push boundaries to create cutting-edge solutions
                that solve real problems.
              </p>
            </div>
            <div className="neu-card">
              <h3 className="neu-card-title text-3xl">Quality</h3>
              <p className="neu-card-desc">
                Every product we deliver meets the highest standards of
                excellence and reliability.
              </p>
            </div>
            <div className="neu-card">
              <h3 className="neu-card-title text-3xl">Partnership</h3>
              <p className="neu-card-desc">
                We work closely with our clients to ensure their success is our
                success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
