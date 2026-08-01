"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { Code, Cpu, Brain, Rocket, Music, BookOpen, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Code, label: "Software Engineering", desc: "Full stack web applications" },
  { icon: Cpu, label: "Embedded Systems", desc: "ESP32, Arduino, Sensors" },
  { icon: Brain, label: "AI/ML", desc: "TensorFlow, CNN, OpenCV" },
  { icon: Rocket, label: "IoT Solutions", desc: "End-to-end IoT systems" },
  { icon: Music, label: "Music", desc: "Composition & Education" },
  { icon: BookOpen, label: "Continuous Learning", desc: "Always exploring new tech" },
  { icon: Users, label: "Leadership", desc: "Managing teams & projects" },
  { icon: Lightbulb, label: "Entrepreneurship", desc: "Building ventures" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="section-container">
        <SectionHeading index={1} title="About Me" subtitle="Building the bridge between hardware and software" />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m an <span className="text-white font-medium">Integrated M.Tech Computer Science</span> student at a university in Coimbatore, Tamil Nadu, India. My passion lies at the intersection of <span className="text-accent-primary">software engineering</span> and <span className="text-accent-highlight">real-world hardware</span>.
              </p>
              <p>
                I enjoy building complete end-to-end products — from hardware circuits and embedded firmware to scalable web applications and intelligent AI systems. My projects combine software engineering with real-world hardware, creating impactful technology rather than isolated applications.
              </p>
              <p>
                Beyond technology, I&apos;m a <span className="text-white font-medium">founder and entrepreneur</span>, having built JR Tunes from the ground up — managing a team of 20+ students, achieving 85%+ examination pass rates, and developing comprehensive music education programs.
              </p>
              <p>
                I believe in <span className="text-white font-medium">continuous learning</span>, <span className="text-white font-medium">leadership</span>, and creating technology that makes a tangible difference in people&apos;s lives.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Coimbatore, Tamil Nadu", "Open to Opportunities", "M.Tech CSE"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlowCard className="h-full">
                  <item.icon className="h-8 w-8 text-accent-primary mb-3" />
                  <h3 className="font-medium text-white text-sm">{item.label}</h3>
                  <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
