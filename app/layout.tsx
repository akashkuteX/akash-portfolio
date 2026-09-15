import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akashkute.com"),

  title: {
    default: "Akash Kute | Software Engineer",
    template: "%s | Akash Kute",
  },

  description:
    "Software Engineer building scalable backend systems, modern web applications, and reliable distributed software.",

  keywords: [
    "Akash Kute",
    "Software Engineer",
    "Backend Engineer",
    "Full Stack Engineer",
    "Distributed Systems",
    "React",
    "Next.js",
    "Spring Boot",
    "Node.js",
    "Python",
    "Java",
  ],

  authors: [
    {
      name: "Akash Kute",
      url: "https://akashkute.com",
    },
  ],

  creator: "Akash Kute",

  alternates: {
    canonical: "https://akashkute.com",
  },

  openGraph: {
    type: "website",
    url: "https://akashkute.com",
    siteName: "Akash Kute",
    title: "Akash Kute | Software Engineer",
    description:
      "Building scalable backend systems, modern web applications, and reliable distributed software.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akash Kute | Software Engineer",
    description:
      "Building scalable backend systems, modern web applications, and reliable distributed software.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}