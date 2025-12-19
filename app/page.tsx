import Link from "next/link";
import Image from "next/image"; // Uncomment when adding bothell.jpg

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/bothell.webp"
            alt="UW Bothell Campus"
            fill
            className="object-cover"
            priority
            quality={90}
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Bothell Consulting Association
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlocking Solutions. Empowering Futures.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-purple mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              The Bothell Consulting Association (BCA) at the University of
              Washington - Bothell empowers students to explore and excel in the
              business and consulting industry. Through an immersive curriculum,
              we provide hands-on project experience, professional mentorship,
              and practical career skills that extend far beyond the classroom.
              Our goal is to equip students with the tools, confidence, and
              network to become impactful problem-solvers and future industry
              leaders.
            </p>  
            <div className="mt-8 text-center">
              <Link
                href="/about"
                className="px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/90 transition-all shadow-md hover:shadow-lg"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with BCA Section */}
      <section className="py-10 bg-white mb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-heading font-bold text-purple mb-4">
              Grow Your Vision!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Students */}
            <div className="flex flex-col bg-linear-to-br from-purple/5 to-light-purple/5 rounded-2xl p-8 border-2 border-purple/20 hover:border-purple/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
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
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  Currently a UW Bothell student looking to grow your consulting
                  and business skills?
                </p>
              </div>
              <Link
                href="/join"
                className="self-start px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/90 transition-all shadow-md hover:shadow-lg"
              >
                Join BCA!
              </Link>
            </div>

            {/* For Organizations */}
            <div className="flex flex-col bg-linear-to-br from-gold/5 to-gold/10 rounded-2xl p-8 border-2 border-gold/30 hover:border-gold/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
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
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  Looking for support with your organization? <br />
                  We&apos;re here to help!
                </p>
              </div>
              <Link
                href="/contact"
                className="self-start px-6 py-3 bg-gold text-purple font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-md hover:shadow-lg"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
