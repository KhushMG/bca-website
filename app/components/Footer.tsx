import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-4 text-gold">
              Bothell Consulting Association
            </h3>
            <p className="text-white text-sm leading-relaxed">
              We empower students to explore and excel in the business and consulting industry through hands-on training and client engagements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-gold transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-white hover:text-gold transition-colors text-sm"
                >
                  Our Members
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-white hover:text-gold transition-colors text-sm"
                >
                  Join BCA
                </Link>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="text-white hover:text-gold transition-colors text-sm"
                >
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gold uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-gold transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:bothellconsultingassociation@gmail.com"
                  className="text-white hover:text-gold transition-colors text-sm"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/bothell-consulting-association/"
                  className="text-white hover:text-gold transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-white mt-8 pt-8 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Bothell Consulting Association. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

