import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealHeading from "../components/RevealHeading";
import SpotlightCard from "../components/SpotlightCard";

const SERVICES = [
  {
    number: "01",
    name: "Mobile App Development",
    description:
      "Intuitive, cross-platform apps built with Flutter and Dart, designed around a polished and dependable user experience.",
  },
  {
    number: "02",
    name: "UI/UX Design",
    description:
      "Thoughtful interfaces and clear user flows that make complex products feel simple, from wireframes to high-fidelity prototypes.",
  },
  {
    number: "03",
    name: "Software Development",
    description:
      "Clean, dependable software in Python and JavaScript, covering automation, tooling, and features that ship reliably.",
  },
  {
    number: "04",
    name: "Branding",
    description:
      "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    number: "05",
    name: "Web Design",
    description:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
  {
    number: "06",
    name: "AI & Machine Learning",
    description:
      "Applied AI in Python -- NLI entailment pipelines, retrieval with FAISS, LLM reliability scoring, and STT plus LLM workflows that ship as working products.",
  },
  {
    number: "07",
    name: "DevOps & Cloud",
    description:
      "Reproducible builds with Docker, Linux and Git workflows, and CI automation that keeps releases boring and deployments predictable.",
  },
  {
    number: "08",
    name: "Robotics & Embedded",
    description:
      "Arduino and Raspberry Pi systems in Python, C++ and Kotlin -- computer vision, sensor work, and hardware you can hold in your hands.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function ServiceRow({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, delay: index * 0.06, ease: EASE }}
      className="group"
    >
      <SpotlightCard
        className="rounded-[28px] px-2 sm:px-4 transition-transform duration-500 ease-out group-hover:-translate-y-1"
        radius={260}
        intensity={0.07}
        maxTilt={2}
        hoverScale={1}
      >
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-10 py-8 sm:py-10 md:py-12"
          style={{
            borderTop: index === 0 ? "none" : "1px solid rgba(12, 12, 12, 0.12)",
          }}
        >
          <motion.span
            className="text-[#0C0C0C]/25 font-black leading-none shrink-0 whitespace-nowrap"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            whileHover={{ color: "#B600A8" }}
            transition={{ duration: 0.4 }}
          >
            {service.number}
          </motion.span>

          <div className="flex flex-1 items-start justify-between gap-6 min-w-0">
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className="text-[#0C0C0C] font-medium uppercase transition-transform duration-500 ease-out group-hover:translate-x-2"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  opacity: 0.6,
                }}
              >
                {service.description}
              </p>
              <span className="mt-1 h-px w-0 bg-[#0C0C0C] transition-all duration-500 ease-out group-hover:w-full" />
            </div>

            <motion.span
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0C0C0C]/15 text-[#0C0C0C] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              whileHover={{ scale: 1.12, rotate: 8 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-10 md:px-14 lg:px-20 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        <RevealHeading text="Services" />
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, index) => (
          <ServiceRow key={service.number} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}