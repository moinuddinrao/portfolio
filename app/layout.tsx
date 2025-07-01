import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moinuddinrao.com"),
  title: "Moin Ud Din - Software Engineer",
  description:
    "Full-stack Software Engineer specializing in React, Node.js, and scalable web applications. Over 2 years of experience in FinTech and GreenTech domains.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Moin Ud Din" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Moin Ud Din - Software Engineer",
    description:
      "Full-stack Software Engineer specializing in React, Node.js, and scalable web applications.",
    url: "https://www.moinuddinrao.com",
    siteName: "Moin Ud Din Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moin Ud Din - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moin Ud Din - Software Engineer",
    description:
      "Full-stack Software Engineer specializing in React, Node.js, and scalable web applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
