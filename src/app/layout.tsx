import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://jaswa.dev"),
  title: {
    default: "Jaswa J.R — Application Developer & UI/UX",
    template: "%s · Jaswa J.R",
  },
  description:
    "Integrated M.Tech CSE — application developer, UI/UX and embedded systems. Portfolio with immersive 3D, shipped products and clean engineering.",
  keywords: [
    "Jaswa J.R",
    "portfolio",
    "application developer",
    "UI/UX",
    "Next.js",
    "React Three Fiber",
    "embedded systems",
    "Coimbatore",
  ],
  authors: [{ name: "Jaswa J.R", url: "https://jaswa.dev" }],
  creator: "Jaswa J.R",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jaswa.dev",
    siteName: "Jaswa J.R",
    title: "Jaswa J.R — Application Developer & UI/UX",
    description:
      "Integrated M.Tech CSE — application developer, UI/UX and embedded systems. Portfolio with immersive 3D.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaswa J.R — Application Developer & UI/UX",
    description: "Application developer · UI/UX · embedded · robotics · DevOps.",
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#08080A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jaswa J.R",
  jobTitle: "Application Developer",
  url: "https://jaswa.dev",
  sameAs: ["https://github.com/Ne-x-us-vault", "https://www.linkedin.com/in/jaswa-j-r/"],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-[#08080A] font-sans text-[#F8F7F5] antialiased selection:bg-[#7A7CFF] selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
