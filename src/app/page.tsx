"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import CommandPalette from "@/components/ui/command-palette";
import CustomCursor from "@/components/ui/custom-cursor";
import Spotlight from "@/components/ui/spotlight";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import FeaturedProducts from "@/components/sections/featured-products";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Achievements from "@/components/sections/achievements";
import Experience from "@/components/sections/experience";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
const Scene = dynamic(()=>import("@/components/three/scene"),{ssr:false, loading:()=><div className="fixed inset-0 -z-10 bg-[#08080A]" />});
export default function Home(){
  return (
    <>
      <Scene />
      <CustomCursor />
      <Spotlight />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <FeaturedProducts />
        <Services />
        <Process />
        <About />
        <TechStack />
        <Education />
        <Certifications />
        <Achievements />
        <Experience />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
