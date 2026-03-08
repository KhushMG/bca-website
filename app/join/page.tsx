import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-purple">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 justify-center">
          <h2 className="text-4xl font-heading font-bold text-white text-center">
            Applications are now closed for the Winter 2026
            Consultant-In-Training Cohort. <br /> <br /> Watch for the opening
            of our Fall 2026 Consultant-In-Training Cohort Applications!
          </h2>
          {/* <h3 className="text-xl font-heading font-semibold text-gold mb-8 text-center">
          Applications are open until <strong> January 18, 2026 11:59 PM PST!</strong>
          </h3> */}

          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center text-white">
              <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSev6fh5kxjZ0crLx0PRwBsXOWgMFztg9PIZGL1Vgf8OFkq0_A/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGntX5WGP5km9qN0BZ5kJOAg29KXAevXbBTXLc4olbWrCAxMj0joo_r-RamXB8_aem_hcafdU5L_koYQxAwe0RWAw"
              target="_blank">
                <button className="px-10 py-5 bg-gold text-purple/90 font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-md hover:shadow-md hover:cursor-pointer hover:scale-105">
                  <span className="text-xl font-heading font-bold">
                    Apply Now!
                  </span>
                </button>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-purple mb-6">
            What&apos;s it like to join BCA?
          </h1>
          <p className="text-xl text-purple/80 max-w-5xl mx-auto">
            After completing the CiT program, members become on BCA&apos;s Case
            Teams and join real client-facing teams led by Engagement Managers
            and the External Team. Case Teams conduct research, analyze business
            problems, and deliver strategic recommendations tailored to the
            specific needs of each client.
            <br />
            <br />
            Companies are local to the Greater Seattle area and vary in
            industry.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-heading font-bold text-purple mb-8 text-center">
            What are we looking for in CiT Applicants?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="flex items-center gap-4 bg-purple/5 p-10 rounded-3xl h-40">
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
                  We want to see how you break down problems and develop
                  structured solutions.
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
                  We want to see how you communicate your ideas and present your
                  work confidently.
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
                  We want to see how you work effectively with diverse teams
                  toward common goals.
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
                  We want to see your genuine interest in consulting and
                  problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 m">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 justify-center">
          <h2 className="text-4xl font-heading font-bold text-purple mb-16 text-center">
            Consultant-In-Training Application Process
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="w-48 h-24 bg-purple rounded-2xl relative flex items-center justify-center shadow-lg shadow-purple/20">
                <span className="text-lg font-heading font-bold text-white text-center">
                  Application
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center md:h-24">
              <svg
                className="w-6 h-6 md:w-10 md:h-6 text-gold rotate-90 md:rotate-0"
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
              <div className="w-48 h-24 bg-purple rounded-2xl relative flex items-center justify-center shadow-lg shadow-purple/20">
                <span className="text-lg font-heading font-bold text-white text-center">
                  Interview <br />
                  <span className="text-sm text-white/95 text-center mt-1">
                    (Behavioral + Case)
                  </span>
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center md:h-24">
              <svg
                className="w-6 h-6 md:w-10 md:h-6 text-gold rotate-90 md:rotate-0"
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
              <div className="w-48 h-24 bg-purple rounded-2xl relative flex items-center justify-center shadow-lg shadow-purple/20 px-2">
                <span className="text-lg font-heading font-bold text-white text-center leading-tight">
                  Final Decision
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center md:h-24">
              <svg
                className="w-6 h-6 md:w-10 md:h-6 text-gold rotate-90 md:rotate-0"
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
              <div className="w-48 h-24 bg-gold rounded-2xl relative flex items-center justify-center shadow-lg shadow-purple/20 px-2">
                <span className="text-lg font-heading font-bold text-purple text-center leading-tight">
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

