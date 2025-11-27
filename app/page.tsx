import Link from "next/link";
import Image from "next/image"; // Uncomment when adding bothell.jpg

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image - uncomment when bothell.jpg is added to /public  */}
       
        <div className="absolute inset-0">
          <Image
            src="/bothell.webp"
            alt="UW Bothell Campus"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark blur overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
       
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Bothell Consulting Association
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlocking Solutions. Empowering Futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/join"
              className="px-8 py-4 bg-gold text-purple font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Join Our Team
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border-2 border-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-purple mb-8 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We&apos;re a student-run consulting club at UW Bothell where you
              can work on real projects, learn consulting skills, and connect
              with other driven students. Whether you&apos;re interested in
              business, strategy, or just want to build your professional skills,
              BCA is your community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              No experience needed - just bring your curiosity and willingness to
              learn. We&apos;ll teach you everything from case frameworks to
              client presentations, all while working on actual consulting
              projects for local businesses and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-12 text-center">
            Why BCA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-light-purple rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-purple mb-3">
                Real Projects
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get hands-on experience solving actual business problems for
                local companies and startups. Build your resume while making a
                real impact!
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-light-purple rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-purple mb-3">
                Amazing Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Make friends with ambitious students who share your goals.
                Plus, get mentorship from our alumni at top companies!
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-light-purple rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-purple mb-3">
                Level Up Your Skills
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn consulting frameworks, presentation skills, and business
                strategy through fun workshops and real project work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with BCA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-purple mb-4">
              Grow Your Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a student looking to grow or an organization
              seeking support, BCA is here to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Students */}
            <div className="bg-linear-to-br from-purple/5 to-light-purple/5 rounded-2xl p-8 border-2 border-purple/20 hover:border-purple/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-purple">
                  For Students
                </h3>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Want to try consulting and meet cool people?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Join BCA to work on real projects, learn valuable skills, and
                be part of a supportive community. Perfect for anyone curious
                about consulting, business, or professional development!
              </p>
              <Link
                href="/join"
                className="inline-block px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/90 transition-all shadow-md hover:shadow-lg"
              >
                Join BCA
              </Link>
            </div>

            {/* For Organizations */}
            <div className="bg-linear-to-br from-gold/5 to-gold/10 rounded-2xl p-8 border-2 border-gold/30 hover:border-gold/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-purple">
                  For Organizations
                </h3>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Need help with a business challenge?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Work with our talented student consultants! We bring fresh
                perspectives, strong work ethic, and analytical skills to help
                your organization - all at student-friendly rates.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-gold text-purple font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-md hover:shadow-lg"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Come be part of UW Bothell&apos;s consulting community and start
            building skills that will last a lifetime!
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-4 bg-gold text-purple font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
