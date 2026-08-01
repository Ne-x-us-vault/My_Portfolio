"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare, AtSign } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "jaswa.personal.3617@outlook.com", href: "mailto:jaswa.personal.3617@outlook.com" },
  { icon: Phone, label: "Phone", value: "+91 99449 73617", href: "tel:+919944973617" },
  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu, India", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/Ne-x-us-vault", href: "https://github.com/Ne-x-us-vault" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jaswa-j-r", href: "https://linkedin.com/in/jaswa-j-r" },
];

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pl-10 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 focus:shadow-[0_0_25px_rgba(59,130,246,0.12)]";

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
        <SectionHeading index={8} title="Get In Touch" subtitle="Let's build something amazing together" />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-300 hover:border-accent-primary/25 hover:bg-white/[0.05] hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary transition-all duration-300 group-hover:bg-accent-primary/20 group-hover:shadow-lg group-hover:shadow-accent-primary/20">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                </div>
              </motion.a>
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
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 transition-colors focus-within:text-accent-primary" />
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-500">Email</label>
                <div className="relative">
                  <AtSign className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 transition-colors focus-within:text-accent-primary" />
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-500">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-gray-500 transition-colors focus-within:text-accent-primary" />
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-primary/25 transition-all duration-300 hover:shadow-accent-primary/40 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                <Send className={`h-4 w-4 transition-transform duration-300 ${submitted ? "translate-x-1 -translate-y-1" : ""}`} />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
