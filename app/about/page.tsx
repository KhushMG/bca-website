export default function AboutPage() {
  // Executive Officers Data
  const executiveOfficers = {
    md: [
      { name: "Officer Name", title: "Managing Director", major: "Major" },
    ],
    external: [
      { name: "Officer Name", title: "Principal", major: "Major" },
      { name: "Officer Name", title: "Associate Principal", major: "Major" },
      { name: "Officer Name", title: "Intern", major: "Major" },
    ],
    internal: [
      { name: "Officer Name", title: "Principal", major: "Major" },
      { name: "Officer Name", title: "Associate Principal", major: "Major" },
      { name: "Officer Name", title: "Intern", major: "Major" },
    ],
    marketing: [
      { name: "Officer Name", title: "Principal", major: "Major" },
      { name: "Officer Name", title: "Associate Principal", major: "Major" },
      { name: "Officer Name", title: "Intern", major: "Major" },
    ],
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-light-purple py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 text-center">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
            Your community for consulting, learning, and growth at UW Bothell
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-purple mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                BCA is a student organization where you can learn consulting,
                work on real projects, and grow alongside other motivated UWB
                students. We&apos;re all about hands-on learning and building a
                supportive community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re exploring consulting as a career or just want
                to develop practical business skills, we&apos;re here to help you
                grow. No prior experience needed - just bring your enthusiasm and
                willingness to learn!
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <p className="text-gray-400 text-center">
                [Mission Image Placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Officers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-4 text-center">
            Our Executive Officers
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Meet the leadership team driving BCA&apos;s vision and operations
          </p>

          {/* Managing Director */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-purple mb-8 text-center">
              Managing Director
            </h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border-2 border-purple/30 w-full max-w-sm">
                {/* Headshot Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-purple/30"
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
                <h4 className="text-xl font-heading font-bold text-purple text-center mb-1">
                  {executiveOfficers.md[0].name}
                </h4>
                <p className="text-gold font-semibold text-center mb-2">
                  {executiveOfficers.md[0].title}
                </p>
                <p className="text-gray-600 text-center text-sm">
                  {executiveOfficers.md[0].major}
                </p>
              </div>
            </div>
          </div>

          {/* External Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-purple mb-8 text-center">
              External Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveOfficers.external.map((officer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-purple"
                >
                  {/* Headshot Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-purple/30"
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
                  <h4 className="text-lg font-heading font-bold text-purple text-center mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-gold font-semibold text-center text-sm mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    {officer.major}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-purple mb-8 text-center">
              Internal Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveOfficers.internal.map((officer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-purple"
                >
                  {/* Headshot Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-purple/30"
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
                  <h4 className="text-lg font-heading font-bold text-purple text-center mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-gold font-semibold text-center text-sm mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    {officer.major}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing & Comms Team */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-purple mb-8 text-center">
              Marketing & Communications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveOfficers.marketing.map((officer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-purple"
                >
                  {/* Headshot Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-purple/30"
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
                  <h4 className="text-lg font-heading font-bold text-purple text-center mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-gold font-semibold text-center text-sm mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-center text-sm">
                    {officer.major}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">E</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-purple mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We always give our best effort and help each other succeed
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">I</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-purple mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We&apos;re honest, supportive, and always do the right thing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">C</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-purple mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Teamwork makes the dream work - we learn and grow together
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">G</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-purple mb-3">
                Growth
              </h3>
              <p className="text-gray-600">
                We&apos;re always learning, improving, and pushing ourselves
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple transition-colors">
              <h3 className="text-2xl font-heading font-semibold text-purple mb-4">
                Real Projects
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Work with local businesses and nonprofits on actual consulting
                projects. You&apos;ll help solve real problems while building
                your skills and resume!
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple transition-colors">
              <h3 className="text-2xl font-heading font-semibold text-purple mb-4">
                Workshops & Training
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Learn through fun workshops, case competitions, and hands-on
                training. We&apos;ll teach you everything from frameworks to
                presentation skills!
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple transition-colors">
              <h3 className="text-2xl font-heading font-semibold text-purple mb-4">
                Community & Events
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Meet professionals, connect with alumni, and hang out with other
                members at speaker events, social gatherings, and team activities!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded by passionate UW Bothell students, the Bothell Consulting
              Association has grown into one of the university&apos;s premier
              student organizations, dedicated to developing future business and
              consulting leaders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We serve two key audiences: UWB students looking to grow their
              consulting and business skills, and organizations seeking
              strategic support. Through our partnerships, students gain
              invaluable real-world experience while delivering meaningful
              results for our clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, BCA continues to unlock solutions and empower futures,
              bridging the gap between academic learning and professional
              excellence in the consulting industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

