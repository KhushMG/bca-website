import Link from "next/link";

export default function AboutPage() {
  // Executive Officers Data
  const executiveOfficers = {
    md: [
      {
        name: "Ashley Tsang",
        title: "Managing Director",
        blurb:
          "Ashley oversees the Marketing and Communications team, operations, and client engagements while leading the Executive Team to keep BCA aligned with its organizational goals.",
        linkedinUrl: "https://www.linkedin.com/in/ashleytsang29/",
      },
      {
        name: "Miyuki Sandoval",
        title: "Managing Director",
        blurb:
          "Miyuki oversees the Internal Team, manages operations and client engagements, and directs the Executive Team to ensure financial and organizational goals are met across campus.",
        linkedinUrl: "https://www.linkedin.com/in/miyukis1/",
      },
    ],
    external: [
      {
        name: "Allison Doak",
        title: "Principal",
        blurb:
          "Allison manages quarterly case teams, drives client outreach and relations, oversees Engagement Managers, and ensures business deliverables meet expectations.",
        linkedinUrl: "https://www.linkedin.com/in/allison-d-49a0b6249/",
      },
      {
        name: "Khushmeet Gobindpuri",
        title: "External Associate Principal",
        blurb:
          "Khushmeet supports case team engagement, assists with communicative outreach to clients, and strengthens BCA's presence on and off campus.",
        linkedinUrl: "https://www.linkedin.com/in/khushmeetgobindpuri/",
      },
      {
        name: "Kaylie Heshmati",
        title: "Intern",
        blurb:
          "Kaylie researches potential clients and supports outreach with member engagement to expand BCA's visibility.",
        linkedinUrl: "https://www.linkedin.com/in/kaylie-heshmati-26731222a/",
      },
    ],
    internal: [
      {
        name: "Sarah Rosen",
        title: "Principal",
        blurb: "Sarah develops BCAapos;s consulting curriculum, ensuring that members gain practical skills and structured learning. She also leads recruitment to bring in new talent and strengthen the organizationapos;s internal growth.",
        linkedinUrl: "https://www.linkedin.com/in/rosensarah05/",
      },
      {
        name: "Andrew Quach",
        title: "Internal Associate Principal",
        blurb: "Andrew works closely with students to ensure their active engagement, supports their professional development, and oversees the CiT curriculum to keep training on track and impactful.",
        linkedinUrl: "https://www.linkedin.com/in/anamquach/",
      },
      {
        name: "Ethan Kim",
        title: "Intern",
        blurb: "Ethan facilitates weekly CiT sessions, serving as a mentor for members. He provides additional support to help students succeed and feel connected within the BCA community.",
        linkedinUrl: "https://www.linkedin.com/in/kimethan/",
      },
    ],
    marketing: [
      {
        name: "Davina Loekito",
        title: "Lead Marketing & Comms. Coordinator",
        blurb: "Davina leads BCA's marketing strategy, strengthening the organization's digital presence through social media, tabling, and design. She works to ensure BCA's professional brand attracts both students and external stakeholders.",
        linkedinUrl: "https://www.linkedin.com/in/davina-loekito/",
      },
      {
        name: "Aditi Menon",
        title: "Data & Marketing Engagement Coordinator",
        blurb: "Aditi tracks engagement metrics and analyzes data to measure the impact of BCA's campaigns. Her work supports strategies that connect with the student community",
        linkedinUrl: "https://www.linkedin.com/in/aditi-menon-568199/",
      },
      {
        name: "Mao Nishio",
        title: "Marketing & Comms. Intern | Social Events Lead",
        blurb: "Mao assists with graphic design that reinforces BCA's brand and events. As Social Events Lead, she also organizes events that bring members together and introduce more students to the consulting field.",
        linkedinUrl: "https://www.linkedin.com/in/maonishio/",
      },
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
                BCA is UW Bothell&apos;s premier student-led consulting club
                dedicated to turning passion into skill. We provide students
                with free, hands-on experiences that build business acumen,
                professionalism, and confidence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                BCA is centered around three pillars: Curriculum, Cases, and
                Clients, whcih transforms curious learners into capable
                consultants and future industry leaders.
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
            Meet our 2025-2026 Partners
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Each executive member has been rigorously selected through a
            comprehensive hiring process to ensure they meet the highest
            standards of competence and leadership. We invite you to explore
            their individual biographies for further insights into their
            qualifications and expertise!
          </p>

          {/* Managing Director */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-purple mb-8 text-center">
              Managing Directors
            </h3>
            <div className="flex justify-center gap-8">
              <div className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl transition-shadow border-2 border-purple/30 w-full max-w-sm">
                {/* Headshot Placeholder */}
                <div className="w-32 h-32 bg-linear-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center"></div>
                <h4 className="text-xl font-heading font-bold text-purple text-left mb-1">
                  {executiveOfficers.md[0].name}
                </h4>
                <p className="text-gold font-semibold text-left mb-2">
                  {executiveOfficers.md[0].title}
                </p>
                <p className="text-gray-600 text-left text-sm">
                  {executiveOfficers.md[0].blurb}
                </p>
                <Link
                  href={executiveOfficers.md[0].linkedinUrl}
                  target="_blank"
                  className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </Link>
              </div>
              <div className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl transition-shadow border-2 border-purple/30 w-full max-w-sm">
                {/* Headshot Placeholder */}
                <div className="w-32 h-32 bg-linear-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center"></div>
                <h4 className="text-xl font-heading font-bold text-purple text-left mb-1">
                  {executiveOfficers.md[1].name}
                </h4>
                <p className="text-gold font-semibold text-left mb-2">
                  {executiveOfficers.md[1].title}
                </p>
                <p className="text-gray-600 text-left text-sm">
                  {executiveOfficers.md[1].blurb}
                </p>
                <Link
                  href={executiveOfficers.md[1].linkedinUrl}
                  target="_blank"
                  className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </Link>
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
                  className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-purple"
                >
                  {/* Headshot Placeholder */}
                  <div className="w-24 h-24 bg-linear-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
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
                  <h4 className="text-lg font-heading font-bold text-purple text-left mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-gold font-semibold text-left text-sm mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-left text-sm">
                    {officer.blurb}
                  </p>
                  <Link
                    href={officer.linkedinUrl}
                    target="_blank"
                    className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>
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
                  className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-purple"
                >
                  {/* Headshot Placeholder */}
                  <div className="w-24 h-24 bg-linear-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
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
                  <h4 className="text-lg font-heading font-bold text-purple text-left mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-gold font-semibold text-left text-sm mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-left text-sm">
                    {officer.blurb}
                  </p>
                  <Link
                    href={officer.linkedinUrl}
                    target="_blank"
                    className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>
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
                  className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-purple"
                >
                  {/* Headshot Placeholder */}
                  <div className="w-24 h-24 bg-linear-to-br from-purple/10 to-light-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
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
                  <h4 className="text-lg font-heading font-bold text-purple text-left mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-gold font-semibold text-left text-sm mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-left text-sm">
                    {officer.blurb}
                  </p>
                  <Link
                    href={officer.linkedinUrl}
                    target="_blank"
                    className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>
                </div>
              ))}
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
                members at speaker events, social gatherings, and team
                activities!
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

