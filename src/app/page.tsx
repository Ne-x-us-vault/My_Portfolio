"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import CommandPalette from "@/components/ui/command-palette";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";

const Scene = dynamic(() => import("@/components/three/scene"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-0 bg-background" />
  ),
});

export default function Home() {
  return (
    <>
      <Scene />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
