export default function JoinPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple to-light-purple py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            What&apos;s it like to join BCA?
          </h1>
          <p className="text-xl text-white/90 max-w-5xl mx-auto">
            After completing the CiT program, members become on BCA&apos;s Case Teams and join real client-facing teams led by Engagement Managers and the External Team. Case Teams conduct research, analyze business problems, and deliver strategic recommendations tailored to the specific needs of each client.
            <br />
            <br />
            Companies are local to the Greater Seattle area and vary in
            industry.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-8 text-center">
            What We&apos;re Looking For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-purple/5 p-10 rounded-3xl h-32">
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
                <h3 className="font-heading font-semibold text-purple text-lg mb-1">
                  Analytical Thinking
                </h3>
                <p className="text-gray-600 text-base">
                  Ability to break down complex problems and develop structured
                  solutions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-purple/5 p-6 rounded-3xl h-32">
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
                <h3 className="font-heading font-semibold text-purple text-lg mb-1">
                  Communication Skills
                </h3>
                <p className="text-gray-600 text-base">
                  Clear articulation of ideas and ability to present confidently
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-purple/5 p-6 rounded-3xl h-32">
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
                <h3 className="font-heading font-semibold text-purple text-lg mb-1">
                  Team Collaboration
                </h3>
                <p className="text-gray-600 text-base">
                  Work effectively with diverse teams toward common goals
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-purple/5 p-6 rounded-3xl h-32">
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
                <h3 className="font-heading font-semibold text-purple text-lg mb-1">
                  Passion for Consulting
                </h3>
                <p className="text-gray-600 text-base">
                  Genuine interest in business strategy and problem-solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 m">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 justify-center">
          <h2 className="text-4xl font-heading font-bold text-purple mb-16 text-center">
            Consultant-In-Training Application Process
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div className="w-64 h-32 bg-purple rounded-3xl relative flex items-center justify-center shadow-xl shadow-purple/20">
                <span className="text-xl font-heading font-bold text-white text-center">
                  Application
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center md:h-32">
              <svg
                className="w-8 h-8 md:w-16 md:h-8 text-gold rotate-90 md:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M2 12h40m0 0l-8-8m8 8l-8 8"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64 h-32 bg-purple rounded-3xl relative flex items-center justify-center shadow-xl shadow-purple/20">
                <span className="text-xl font-heading font-bold text-white text-center">
                  Interview <br />
                  <span className="text-sm text-white/95 text-center mt-1">
                    (Behavioral + Case)
                  </span>
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center md:h-32">
              <svg
                className="w-8 h-8 md:w-16 md:h-8 text-gold rotate-90 md:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M2 12h40m0 0l-8-8m8 8l-8 8"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64 h-32 bg-purple rounded-3xl relative flex items-center justify-center shadow-xl shadow-purple/20 px-3">
                <span className="text-xl font-heading font-bold text-white text-center leading-tight">
                  Final Decision
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center md:h-32">
              <svg
                className="w-8 h-8 md:w-16 md:h-8 text-gold rotate-90 md:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M2 12h40m0 0l-8-8m8 8l-8 8"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64 h-32 bg-gold rounded-3xl relative flex items-center justify-center shadow-xl shadow-purple/20 px-3">
                <span className="text-xl font-heading font-bold text-purple text-center leading-tight">
                  Welcome to BCA!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

