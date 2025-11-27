import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Neue Regrade for headings - TEMPORARILY DISABLED
// Uncomment the localFont import above and this block when you add font files to /public/fonts/
/*
const neueRegrade = localFont({
  src: [
    {
      path: "../public/fonts/NeueRegrade-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueRegrade-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueRegrade-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});
*/

// Temporary: Use Manrope for headings until Neue Regrade files are added
const neueRegrade = {
  variable: "--font-heading",
};

export const metadata: Metadata = {
  title: "Bothell Consulting Association",
  description: "Empowering students at the University of Washington - Bothell to explore and excel in the business and consulting industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${neueRegrade.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
