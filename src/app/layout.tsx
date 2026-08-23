import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://jaswa.dev"),
  title: "Jaswa J.R — Application Developer & UI/UX",
  description: "M.Tech CSE — Application developer, UI/UX and embedded systems. Portfolio with immersive 3D.",
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
        {children}
      </body>
    </html>
  );
}
