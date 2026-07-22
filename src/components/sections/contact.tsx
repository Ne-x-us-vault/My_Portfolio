"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "jaswajr@example.com", href: "mailto:jaswajr@example.com" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX" },
  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu, India", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/jaswa-jr", href: "https://github.com/jaswa-jr" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jaswa-jr", href: "https://linkedin.com/in/jaswa-jr" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="section-container">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all hover:border-white/[0.1] hover:bg-white/[0.05]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary transition-all group-hover:bg-accent-primary/20">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-green-400 font-medium">Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-xs text-gray-500">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-500">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-500">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-primary/25 transition-all hover:shadow-accent-primary/40 hover:scale-[1.01]"
              >
                <Send className="h-4 w-4" />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
