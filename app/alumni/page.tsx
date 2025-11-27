export default function AlumniPage() {
  // Sample alumni data - replace with actual alumni information
  const alumni = [
    { company: "Deloitte", role: "Consultant" },
    { company: "McKinsey & Company", role: "Business Analyst" },
    { company: "Bain & Company", role: "Associate Consultant" },
    { company: "Boston Consulting Group", role: "Strategy Consultant" },
    { company: "Accenture", role: "Management Consultant" },
    { company: "PwC", role: "Associate" },
    { company: "EY", role: "Advisory Consultant" },
    { company: "KPMG", role: "Business Analyst" },
    { company: "Amazon", role: "Product Manager" },
    { company: "Microsoft", role: "Program Manager" },
    { company: "Google", role: "Business Strategy Analyst" },
    { company: "Meta", role: "Strategy & Operations" },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple to-light-purple py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Our Alumni
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            BCA alumni are making their mark across leading consulting firms and
            top companies worldwide
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-heading font-bold text-purple mb-2">
                100+
              </div>
              <p className="text-gray-600 font-medium">Alumni Network</p>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-purple mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">Companies Represented</p>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-purple mb-2">
                95%
              </div>
              <p className="text-gray-600 font-medium">
                Career Placement Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-4 text-center">
            Where Our Alumni Work
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our members have gone on to successful careers at top consulting
            firms, technology companies, and financial institutions
          </p>

          {/* Alumni Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alum, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all border-2 border-gray-200 hover:border-purple group hover:scale-105 duration-300"
              >
                {/* Company Logo Placeholder */}
                <div className="w-32 h-32 bg-linear-to-br from-purple/5 to-light-purple/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple/10 group-hover:to-light-purple/10 transition-colors">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple/10 rounded-xl flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-purple">
                        {alum.company.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Company Name */}
                <h3 className="text-xl font-heading font-bold text-purple text-center mb-2">
                  {alum.company}
                </h3>
                
                {/* Role */}
                <p className="text-base text-gray-600 text-center font-medium">
                  {alum.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              * Company logos are placeholders. Replace with actual logo images.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-16 text-center">
            What Alumni Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple/5 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                &quot;BCA gave me the hands-on consulting experience and
                professional network that was instrumental in landing my role at
                a top consulting firm. The skills I learned are invaluable.&quot;
              </p>
              <div>
                <p className="font-heading font-semibold text-purple">
                  [Alumni Name]
                </p>
                <p className="text-sm text-gray-600">
                  Consultant, [Consulting Firm]
                </p>
              </div>
            </div>

            <div className="bg-purple/5 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                &quot;The mentorship and real-world project experience I gained
                through BCA prepared me exceptionally well for my career. I
                highly recommend it to any student serious about consulting.&quot;
              </p>
              <div>
                <p className="font-heading font-semibold text-purple">
                  [Alumni Name]
                </p>
                <p className="text-sm text-gray-600">
                  Strategy Analyst, [Tech Company]
                </p>
              </div>
            </div>

            <div className="bg-purple/5 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                &quot;Being part of BCA was one of the best decisions I made in
                college. The community, projects, and professional development
                opportunities set me apart in the job market.&quot;
              </p>
              <div>
                <p className="font-heading font-semibold text-purple">
                  [Alumni Name]
                </p>
                <p className="text-sm text-gray-600">
                  Associate, [Professional Services Firm]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Network CTA */}
      <section className="py-20 bg-purple">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Join Our Alumni Network
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Current members gain access to our extensive alumni network for
            mentorship, career guidance, and professional opportunities
          </p>
          <a
            href="/join"
            className="inline-block px-8 py-4 bg-gold text-purple font-semibold rounded-lg hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Learn About Joining BCA
          </a>
        </div>
      </section>
    </div>
  );
}

