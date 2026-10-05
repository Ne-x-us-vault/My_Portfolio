import { MotionConfig } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import CTASection from "./sections/CTASection";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain bg-[#0C0C0C] min-h-screen" style={{ overflowX: "clip" }}>
        <ScrollProgress />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <CTASection />
        <Cursor />
      </div>
    </MotionConfig>
  );
}