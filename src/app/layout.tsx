import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaswa.dev"),
  title: "Jaswa J.R | Full Stack Developer & IoT Engineer",
  description:
    "Full Stack Developer, IoT Engineer, AI/ML Enthusiast, and Embedded Systems Developer. Building intelligent systems from hardware to cloud. Open to opportunities.",
  keywords: [
    "Jaswa J.R",
    "Full Stack Developer",
    "IoT Engineer",
    "AI/ML",
    "Embedded Systems",
    "React",
    "Node.js",
    "Python",
    "ESP32",
    "Portfolio",
    "Coimbatore",
    "Tamil Nadu",
    "India",
  ],
  authors: [{ name: "Jaswa J.R" }],
  creator: "Jaswa J.R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaswa.dev",
    siteName: "Jaswa J.R Portfolio",
    title: "Jaswa J.R | Full Stack Developer & IoT Engineer",
    description:
      "Building intelligent systems from hardware to cloud. Full Stack Developer, IoT Engineer, AI/ML Enthusiast.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaswa J.R - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaswa J.R | Full Stack Developer & IoT Engineer",
    description:
      "Building intelligent systems from hardware to cloud.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jaswa J.R",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer, IoT Engineer, AI/ML Enthusiast, and Embedded Systems Developer.",
  url: "https://jaswa.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/jaswa-jr",
    "https://linkedin.com/in/jaswa-jr",
  ],
  knowsAbout: [
    "Full Stack Development",
    "IoT",
    "Embedded Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "React",
    "Node.js",
    "Python",
    "ESP32",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
