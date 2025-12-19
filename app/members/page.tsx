export default function MembersPage() {
  const members = [
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
    {
      name: "Member Name",
      role: "Case Team",
      major: "Business Administration",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold  mb-6 text-purple">
            Meet Our Team!
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto">
            Engagement Managers and Consultants collaborate closely to deliver
            impactful client solutions. Engagement Managers guide project
            direction and team coordination, while Consultants drive research,
            analysis, and strategic recommendations. Together, they combine
            leadership and problem-solving to create value for our partnerships.
          </p>
          <p className="text-2xl text-orange-400 mt-12 max-w-4xl mx-auto">
            Please note: this page is currently under construction!
          </p>
        </div>
      </section>

      {/* Cohort Badge */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-purple to-light-purple px-6 py-3 rounded-full">
            <span className="text-white font-heading font-bold text-lg">
              Spring 2025 Case Team
            </span>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 pb-10 shadow-md
                hover:shadow-2xl transition-shadow border-4 border-purple/30
                w-full max-w-sm"
              >
                {/* bg-white rounded-2xl shadow-md p-4 pb-10 overflow-hidden
                hover:transform hover:scale-105 transition-all duration-300
                border border-purple/30 hover:border-gold max-w-sm */}

                {/* relative bg-white rounded-2xl p-8 pb-16 shadow-md
                hover:shadow-xl transition-shadow border-4 border-purple/30
                w-full max-w-sm */}
                {/* Headshot Placeholder */}
                <div className="aspect-square bg-linear-to-br from-purple/20 to-light-purple/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500 text-xs">
                      Headshots Coming Soon!
                    </p>
                  </div>
                </div>
                {/* Member Info */}
                <div className="text-left mt-4">
                  <h3 className="text-xl font-heading font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-2">{member.major}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-linear-to-r from-purple to-light-purple rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Interested in Joining Us?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Applications for the next Consultant-In-Training (CiT) program open
            January 18, 2026.
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

