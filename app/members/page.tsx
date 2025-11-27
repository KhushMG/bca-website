export default function MembersPage() {
  // Sample member data - can be replaced with real data
  const members = [
    {
      name: "Member Name",
      role: "President",
      major: "Business Administration",
      cohort: "Winter 2026",
    },
    {
      name: "Member Name",
      role: "Vice President",
      major: "Computer Science",
      cohort: "Winter 2026",
    },
    {
      name: "Member Name",
      role: "Project Lead",
      major: "Economics",
      cohort: "Winter 2026",
    },
    {
      name: "Member Name",
      role: "Analyst",
      major: "Data Science",
      cohort: "Winter 2026",
    },
    {
      name: "Member Name",
      role: "Analyst",
      major: "Business Administration",
      cohort: "Winter 2026",
    },
    {
      name: "Member Name",
      role: "Analyst",
      major: "Finance",
      cohort: "Winter 2026",
    },
    {
      name: "Member Name",
      role: "Marketing Lead",
      major: "Communications",
      cohort: "Winter 2026",
    },
    {
      name: "Member Name",
      role: "Analyst",
      major: "Management",
      cohort: "Winter 2026",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Members
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the amazing students making BCA happen!
          </p>
        </div>
      </section>

      {/* Cohort Badge */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple to-light-purple px-6 py-3 rounded-full">
            <svg
              className="w-5 h-5 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-heading font-bold text-lg">
              Winter 2026 Cohort
            </span>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gold"
              >
                {/* Headshot Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-purple/20 to-light-purple/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-xs">Headshot Placeholder</p>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-2">{member.major}</p>
                  <div className="inline-block bg-purple/20 px-3 py-1 rounded-full">
                    <p className="text-light-purple text-xs font-semibold">
                      {member.cohort}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple to-light-purple rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Applications for the next cohort open soon. Be part of something
            great.
          </p>
          <a
            href="/join"
            className="inline-block px-8 py-4 bg-gold text-purple font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Learn About Joining
          </a>
        </div>
      </section>
    </div>
  );
}

