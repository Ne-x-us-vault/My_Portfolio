import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { useRef, type RefObject } from "react";
import LiveProjectButton from "../components/LiveProjectButton";

const PROJECTS = [
  {
    number: "01",
    name: "Nexus Launcher",
    category: "Open Source",
    summary:
      "A frost-glass, keyboard-first GNOME Shell launcher with instant app search, arrow-key navigation, and quick actions for Terminal, Files, GitHub and LinkedIn.",
    stack: ["JavaScript", "GNOME Shell", "GJS", "Linux"],
    href: "https://github.com/Ne-x-us-vault/custom-launcher-nexus",
    // TODO: replace with real screenshots of the extension overlay.
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    number: "02",
    name: "Lovit",
    category: "Mobile App",
    summary:
      "A private realtime couples app built with Flutter and Supabase — encrypted chat, a shared calendar, cycle tracking, budgets, tasks and live location sharing.",
    stack: ["Flutter", "Dart", "Supabase", "Realtime"],
    href: "https://github.com/Ne-x-us-vault/Tether",
    // TODO: replace with real screenshots of the app.
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    number: "03",
    name: "PiVision",
    category: "Embedded / R&D",
    summary:
      "Touchless computer control on a Raspberry Pi 5. MediaPipe reads 21 hand landmarks from a webcam and injects cursor, click and scroll input into Linux through a virtual uinput device.",
    stack: ["Python", "Raspberry Pi", "MediaPipe", "OpenCV"],
    href: "https://github.com/Ne-x-us-vault/pivision",
    // TODO: replace with a photo of the Pi + webcam rig.
    images: {
      col1Top:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1Bottom:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
];

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
  total: number;
  containerRef: RefObject<HTMLDivElement | null>;
}

function ProjectCard({ project, index, total, containerRef }: ProjectCardProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const cardStyle: MotionStyle = {
    scale,
    top: `${index * 24}px`,
    height: `calc(100% - ${index * 24}px)`,
  };

  return (
    <div className="h-[80vh] sticky top-24 md:top-32 flex justify-center">
      <motion.div
        style={cardStyle}
        className="relative flex w-full max-w-[1100px] origin-top flex-col rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-6 min-w-0">
            <span
              className="text-[#D7E2EA] font-black leading-none shrink-0 whitespace-nowrap"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col items-start gap-2 min-w-0">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm md:text-base">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
              <p
                className="text-[#D7E2EA] font-light leading-snug max-w-[52ch]"
                style={{
                  fontSize: "clamp(0.75rem, 1.3vw, 1.05rem)",
                  opacity: 0.65,
                }}
              >
                {project.summary}
              </p>
              <ul className="flex flex-wrap gap-2 pt-0.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[#D7E2EA] font-light uppercase tracking-wider whitespace-nowrap"
                    style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.75rem)" }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <LiveProjectButton href={project.href} className="shrink-0" />
        </div>

        <div className="mt-6 sm:mt-8 flex flex-1 min-h-0 gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <div className="min-h-0 w-full" style={{ flex: 1 }}>
              <img
                src={project.images.col1Top}
                alt={`${project.name} image 1`}
                loading="lazy"
                className="h-full w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
            <div className="min-h-0 w-full" style={{ flex: 1.4 }}>
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} image 2`}
                loading="lazy"
                className="h-full w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
          <div className="flex w-[60%] min-h-0">
            <img
              src={project.images.col2}
              alt={`${project.name} image 3`}
              loading="lazy"
              className="h-full w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div ref={containerRef} className="relative">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
}