import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  // Executive Officers Data
  const executiveOfficers = {
    md: [
      {
        name: "Ashley Tsang",
        title: "Managing Director",
        imageUrl: "/headshots/officers/Ashley.jpg",
        blurb:
          "Ashley co-leads the Executive, Internal, and Marketing teams, overseeing operations and client engagements to strengthen BCA’s campus presence and ensure alignment with organizational goals.",
        linkedinUrl: "https://www.linkedin.com/in/ashleytsang29/",
      },
      {
        name: "Miyuki Sandoval",
        title: "Managing Director",
        imageUrl: "/headshots/officers/Miyuki.jpg",
        blurb:
          "Miyuki co-leads the Executive, Internal, and Marketing teams, overseeing operations and client engagements to strengthen BCA’s campus presence and ensure alignment with organizational goals.",
        linkedinUrl: "https://www.linkedin.com/in/miyukis1/",
      },
    ],
    external: [
      {
        name: "Allison Doak",
        title: "Principal",
        imageUrl: "/headshots/officers/Allison.jpg",
        blurb:
          "Allison manages quarterly case teams, drives client outreach and relations, oversees Engagement Managers, and ensures business deliverables meet expectations.",
        linkedinUrl: "https://www.linkedin.com/in/allison-d-49a0b6249/",
      },
      {
        name: "Khushmeet Gobindpuri",
        title: "External Associate Principal",
        imageUrl: "/headshots/officers/Khushmeet.jpg",
        blurb:
          "Khushmeet supports case team engagement, assists with outreach to clients, and strengthens BCA's presence on and off campus.",
        linkedinUrl: "https://www.linkedin.com/in/khushmeetgobindpuri/",
      },
      {
        name: "Kaylie Heshmati",
        title: "Intern",
        imageUrl: "/headshots/officers/Kaylie.jpg",
        blurb:
          "Kaylie researches potential clients and supports outreach with member engagement to expand BCA's visibility.",
        linkedinUrl: "https://www.linkedin.com/in/kaylie-heshmati-26731222a/",
      },
    ],
    internal: [
      {
        name: "Sarah Rosen",
        title: "Principal",
        imageUrl: "/headshots/officers/Sarah.jpg",
        blurb:
          "Sarah develops BCA's consulting curriculum, ensuring that members gain practical skills and structured learning. She also leads recruitment to bring in new talent and strengthen the organization's internal growth.",
        linkedinUrl: "https://www.linkedin.com/in/rosensarah05/",
      },
      {
        name: "Andrew Quach",
        title: "Internal Associate Principal",
        imageUrl: "/headshots/officers/Andrew.jpg",
        blurb:
          "Andrew works closely with students to ensure their active engagement, supports their professional development, and oversees the CiT curriculum to keep training on track and impactful.",
        linkedinUrl: "https://www.linkedin.com/in/anamquach/",
      },
      {
        name: "Ethan Kim",
        title: "Intern",
        imageUrl: "/headshots/officers/Ethan.jpg",
        blurb:
          "Ethan facilitates weekly CiT sessions, serving as a mentor for members. He provides additional support to help students succeed and feel connected within the BCA community.",
        linkedinUrl: "https://www.linkedin.com/in/kimethan/",
      },
    ],
    marketing: [
      {
        name: "Davina Loekito",
        title: "Lead Marketing & Comms. Coordinator",
        imageUrl: "/headshots/officers/Davina.jpg",
        blurb:
          "Davina leads BCA's marketing strategy, strengthening the organization's presence through social media content and design. She ensures BCA's professional brand attracts both students and external stakeholders.",
        linkedinUrl: "https://www.linkedin.com/in/davina-loekito/",
      },
      {
        name: "Aditi Menon",
        title: "Data & Marketing Engagement Coordinator",
        imageUrl: "/headshots/officers/Aditi.jpg",
        blurb:
          "Aditi tracks engagement metrics and analyzes data to measure the impact of BCA's campaigns. Her work supports strategies that connect with the student community.",
        linkedinUrl: "https://www.linkedin.com/in/aditi-menon-568199/",
      },
      {
        name: "Mao Nishio",
        title: "Marketing & Comms. Intern, Social Events Lead",
        imageUrl: "/headshots/officers/Mao.jpg",
        blurb:
          "Mao assists with graphic design that reinforces BCA's brand and events. As Social Events Lead, she also organizes events that bring members together and introduce more students to the consulting field.",
        linkedinUrl: "https://www.linkedin.com/in/maonishio/",
      },
    ],
  };

  return (
    <div className="pt-24">
      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-purple mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                BCA is UW Bothell&apos;s premier student-led consulting club
                dedicated to turning passion into skill. We provide students
                with free, hands-on experiences that build business acumen,
                professionalism, and confidence.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                BCA is centered around three pillars: Curriculum, Cases, and
                Clients, which transform curious learners into capable
                consultants and future industry leaders.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/Officers-Group.jpg"
                alt="BCA Officers Group Photo"
                width={4982}
                height={4000}
                quality={100}
                priority
                className="mx-auto mb-6 rounded-md w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-6 bg-white mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-purple mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple transition-colors">
              <h3 className="text-2xl font-heading font-semibold text-purple mb-4">
                Client Engagements
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                You will work with local businesses and nonprofits on actual
                consulting projects to help solve real problems while building
                your skills and resume!
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple transition-colors">
              <h3 className="text-2xl font-heading font-semibold text-purple mb-4">
                Workshops & Training
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                We teach you everything from frameworks to presentation skills
                through fun workshops, case competitions, and hands-on training.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple transition-colors">
              <h3 className="text-2xl font-heading font-semibold text-purple mb-4">
                Community & Events
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                Gain access to a network of professionals, alumni, and build
                connections with other members at events, gatherings, and team
                activities!
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
          <p className="text-gray-600 text-xl text-center mb-16 max-w-3xl mx-auto">
            Each executive member has been rigorously evaluated through a
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
            <div className="flex justify-center gap-8 sm:flex-row flex-col">
              <div className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl hover:border-purple-600 border-4 border-purple/30 w-full max-w-sm hover:scale-105 transition-all duration-300 text-lg">
                <Image
                  src={executiveOfficers.md[0].imageUrl}
                  alt={executiveOfficers.md[0].name}
                  width={312}
                  height={312}
                  quality={100}
                  priority
                  className="mx-auto mb-6 rounded-md"
                />
                <h4 className="text-xl font-heading font-bold text-purple text-left mb-1">
                  {executiveOfficers.md[0].name}
                </h4>
                <p className="text-black font-semibold text-left mb-2">
                  {executiveOfficers.md[0].title}
                </p>
                <p className="text-gray-600 text-left text-md">
                  {executiveOfficers.md[0].blurb}
                </p>
                <Link
                  href={executiveOfficers.md[0].linkedinUrl}
                  target="_blank"
                  className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </Link>
              </div>
              <div className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl hover:border-purple-600 border-4 border-purple/30 w-full max-w-sm hover:scale-105 transition-all duration-300 text-lg">
                <Image
                  src={executiveOfficers.md[1].imageUrl}
                  alt={executiveOfficers.md[1].name}
                  width={312}
                  height={312}
                  quality={100}
                  priority
                  className="mx-auto mb-6 rounded-md"
                />
                <h4 className="text-xl font-heading font-bold text-purple text-left mb-1">
                  {executiveOfficers.md[1].name}
                </h4>
                <p className="text-black font-semibold text-left mb-2">
                  {executiveOfficers.md[1].title}
                </p>
                <p className="text-gray-600 text-left text-md">
                  {executiveOfficers.md[1].blurb}
                </p>
                <Link
                  href={executiveOfficers.md[1].linkedinUrl}
                  target="_blank"
                  className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                  className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl hover:border-purple-600 border-4 border-purple/30 w-full max-w-sm hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={officer.imageUrl}
                    alt={officer.name}
                    width={312}
                    height={312}
                    quality={100}
                    priority
                    className="mx-auto mb-6 rounded-md"
                  />
                  <h4 className="text-xl font-heading font-bold text-purple text-left mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-black font-semibold text-left text-md mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-left text-md">
                    {officer.blurb}
                  </p>
                  <Link
                    href={officer.linkedinUrl}
                    target="_blank"
                    className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
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
                  className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl hover:border-purple-600 border-4 border-purple/30 w-full max-w-sm hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={officer.imageUrl}
                    alt={officer.name}
                    width={312}
                    height={312}
                    quality={100}
                    priority
                    className="mx-auto mb-6 rounded-md"
                  />
                  <h4 className="text-xl font-heading font-bold text-purple text-left mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-black font-semibold text-left text-md mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-left text-md">
                    {officer.blurb}
                  </p>
                  <Link
                    href={officer.linkedinUrl}
                    target="_blank"
                    className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
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
                  className="relative bg-white rounded-2xl p-8 pb-16 shadow-md hover:shadow-xl hover:border-purple-600 border-4 border-purple/30 w-full max-w-sm hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={officer.imageUrl}
                    alt={officer.name}
                    width={312}
                    height={312}
                    quality={100}
                    priority
                    objectFit="cover"
                    className="mx-auto mb-6 rounded-md"
                  />

                  <h4 className="text-xl font-heading font-bold text-purple text-left mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-black font-semibold text-left text-md mb-2">
                    {officer.title}
                  </p>
                  <p className="text-gray-600 text-left text-md">
                    {officer.blurb}
                  </p>
                  <Link
                    href={officer.linkedinUrl}
                    target="_blank"
                    className="absolute bottom-4 left-8 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
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
    </div>
  );
}

