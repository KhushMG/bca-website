"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/members", label: "Members" },
    { href: "/join", label: "Join BCA" },
    // { href: "/contact", label: "Contact" },
    // { href: "/alumni", label: "Alumni" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple/10 shadow-sm drop-shadow-lg">
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
          <Image src="/BCA-Logo.png" alt="BCA Logo" width={100} height={100} quality={100} priority />
            <div className="relative">
            
              <span className="text-3xl font-heading font-bold bg-linear-to-r from-purple to-light-purple bg-clip-text text-transparent">
                BCA
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-base font-medium transition-all duration-200 rounded-full ${
                  pathname === link.href
                    ? "text-purple bg-purple/10"
                    : "text-black hover:text-purple hover:bg-purple/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-gray-600 hover:text-purple hover:bg-purple/5 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                  pathname === link.href
                    ? "text-purple bg-purple/10"
                    : "text-black hover:text-purple hover:bg-purple/5"
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
