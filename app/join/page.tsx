export default function JoinPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple to-light-purple py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Become a Consultant / Case Team member!
          </h1>
          <p className="text-xl text-white/90 max-w-5xl mx-auto">
            After completing the CiT program, members become Consultants and
            join real client-facing teams led by Engagement Managers and the
            External Team. Case Teams conduct research, analyze business
            problems, and deliver strategic recommendations tailored to the
            specific needs of each client.
            <br/>
            <br/>
            Companies are local to the Greater Seattle area and vary in industry.
          </p>
        </div>
      </section>

      {/* Why Choose BCA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-12 text-center">
            Why BCA Over Other Organizations?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* BCA Side */}
            <div className="bg-linear-to-br from-purple/5 to-light-purple/5 border-2 border-purple rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-purple">
                  BCA Membership
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Real consulting projects with actual clients and measurable
                    impact
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Structured mentorship from experienced consultants and
                    alumni
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Direct pipeline to top consulting firms through our alumni
                    network
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Comprehensive skill development workshops and case
                    competitions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Small, tight-knit community focused on professional
                    excellence
                  </span>
                </li>
              </ul>
            </div>

            {/* Other Organizations Side */}
            <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-600">
                  Other Ways to Get Involved
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500">
                    Limited hands-on consulting experience with real clients
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500">
                    General business knowledge without consulting specialization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500">
                    Larger groups with less personalized attention
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500">
                    Primarily social or networking focused activities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-500">
                    Less direct connections to consulting industry
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-4 text-center">
            Membership Application Process
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our selective application process ensures we bring in the most
            passionate and talented individuals
          </p>

          {/* Process Steps with Arrows */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-purple rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl font-heading font-bold text-white">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-purple mb-2 text-center">
                  Submit Application
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Complete our online form
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center items-center">
                <svg
                  className="w-12 h-12 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-purple rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl font-heading font-bold text-white">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-purple mb-2 text-center">
                  First Round Interview
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Meet with current members
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center items-center">
                <svg
                  className="w-12 h-12 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-purple rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl font-heading font-bold text-white">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-purple mb-2 text-center">
                  Case Interview
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Solve a business case
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-center mt-8">
              <svg
                className="w-12 h-12 text-gold rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 max-w-3xl mx-auto">
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gold rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl font-heading font-bold text-purple">
                    4
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-purple mb-2 text-center">
                  Final Decision
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Receive your offer
                </p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gold rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl font-heading font-bold text-purple">
                    5
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-purple mb-2 text-center">
                  Welcome to BCA!
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Begin your journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-purple mb-8 text-center">
            What We Look For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-purple/5 p-6 rounded-xl">
              <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-purple mb-1">
                  Analytical Thinking
                </h3>
                <p className="text-gray-600 text-sm">
                  Ability to break down complex problems and develop structured
                  solutions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-purple/5 p-6 rounded-xl">
              <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-purple mb-1">
                  Communication Skills
                </h3>
                <p className="text-gray-600 text-sm">
                  Clear articulation of ideas and ability to present confidently
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-purple/5 p-6 rounded-xl">
              <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-purple mb-1">
                  Team Collaboration
                </h3>
                <p className="text-gray-600 text-sm">
                  Work effectively with diverse teams toward common goals
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-purple/5 p-6 rounded-xl">
              <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-purple mb-1">
                  Passion for Consulting
                </h3>
                <p className="text-gray-600 text-sm">
                  Genuine interest in business strategy and problem-solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations/Partners Section */}
      <section className="py-20 bg-white border-t-2 border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-purple mb-4">
              Partner With BCA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Looking for support with your organization? We are here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-purple/5 to-light-purple/5 rounded-2xl p-8 border-2 border-purple/20">
              <h3 className="text-2xl font-heading font-bold text-purple mb-4">
                For Organizations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Partner with BCA to access talented students who can provide
                strategic consulting support for your business challenges. Our
                teams deliver high-quality analysis and recommendations at a
                fraction of traditional consulting costs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Access to motivated, high-caliber students
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Cost-effective consulting solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Fresh perspectives on your business challenges
                  </span>
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/90 transition-all"
              >
                Partner With Us
              </a>
            </div>

            <div className="bg-linear-to-br from-gold/5 to-gold/10 rounded-2xl p-8 border-2 border-gold/30 hover:border-gold/50 transition-colors">
              <h3 className="text-2xl font-heading font-bold text-purple mb-4">
                For Students
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Currently a UWB student and looking to grow? Join BCA to gain
                hands-on consulting experience, develop professional skills, and
                build a network that will accelerate your career.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-purple mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Real-world project experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-purple mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Professional mentorship and skill development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-purple mt-1 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Network of peers and industry professionals
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-gold text-purple font-semibold rounded-lg hover:bg-gold/90 transition-all"
              >
                Apply to Join
              </a>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}

