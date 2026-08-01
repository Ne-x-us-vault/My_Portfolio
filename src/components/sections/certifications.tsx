"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { CERTIFICATIONS } from "@/lib/data";
import { Award, ArrowUpRight } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="section-container">
        <SectionHeading index={6} title="Certifications" subtitle="Professional certifications and memberships" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlowCard className="group flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 transition-all duration-500 group-hover:scale-110 group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30">
                  <Award className="h-5 w-5 text-accent-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white text-sm">{cert.name}</h3>
                  <p className="mt-1 text-xs text-gray-400">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-gray-500">{cert.date}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-accent-primary opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
