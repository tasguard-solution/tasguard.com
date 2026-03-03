import { ExternalLink, Mail, Linkedin, Github } from "lucide-react";

export function Team() {
  // You can customize this section with your personal information
  const teamMembers = [
    {
      name: "Anointing Tamunowunari-Tasker",
      role: "Founder & CEO",
      bio: "Leading Tasguard Solutions to deliver innovative software products that make a difference.",
      website: "https://anointing.tasguard.com", // Replace with your actual website
      email: "[EMAIL_ADDRESS]",
      linkedin: "",
      github: "",
    },
    // Add more team members here as needed
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The talented people behind Tasguard Solutions
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>

                {/* Contact Links */}
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Personal Website
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Note for customization */}
          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Customize Your Team</h3>
            <p className="text-gray-700 mb-4">
              To add your personal information and team members, edit the{" "}
              <code className="bg-white px-2 py-1 rounded text-blue-600">
                teamMembers
              </code>{" "}
              array in{" "}
              <code className="bg-white px-2 py-1 rounded text-blue-600">
                /src/app/pages/Team.tsx
              </code>
            </p>
            <p className="text-gray-600">
              You can add your name, role, bio, website link, email, LinkedIn,
              and GitHub profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us at Tasguard Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to create cutting-edge solutions
                that solve real problems
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                Every product we deliver meets the highest standards of
                excellence and reliability
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients to ensure their success is our
                success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
