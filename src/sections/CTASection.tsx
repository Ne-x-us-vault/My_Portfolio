import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import ContactButton from "../components/ContactButton";
import Magnet from "../components/Magnet";
import RevealHeading from "../components/RevealHeading";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  MAILTO,
} from "../contact";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Slow-drifting colour fields behind the closing call to action. */
function ContactGlow() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#B600A8]/25 blur-[110px]"
        animate={{ x: [0, 70, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#BE4C00]/25 blur-[110px]"
        animate={{ x: [0, -60, 0], y: [0, -45, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = MAILTO;
    }
  };

  return (
    <motion.button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      data-cursor="hover"
      whileHover={reducedMotion ? undefined : { scale: 1.12, rotate: -8 }}
      whileTap={reducedMotion ? undefined : { scale: 0.92 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="relative inline-flex shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/25 p-2 text-[#D7E2EA]/70 transition-colors duration-200 hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={reducedMotion ? false : { scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={reducedMotion ? undefined : { scale: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex"
          >
            <Check className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={reducedMotion ? false : { scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={reducedMotion ? undefined : { scale: 0, rotate: -90 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex"
          >
            <Copy className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={reducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#B600A8]/90 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-white"
          >
            Copied
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function ChannelLink({
  href,
  label,
  value,
  children,
}: {
  href: string;
  label: string;
  value: string;
  children: ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      data-cursor="hover"
      data-cursor-label="open"
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group flex items-center gap-4 rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.02] px-6 py-5 transition-colors duration-300 hover:border-[#D7E2EA]/50 hover:bg-white/[0.06]"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA]">
        <motion.span
          className="absolute inset-0 rounded-full bg-[#B600A8]/25"
          initial={false}
          animate={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.35, ease: EASE }}
        />
        <motion.span
          className="relative flex"
          whileHover={{ rotate: -8, scale: 1.1 }}
        >
          {children}
        </motion.span>
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[#D7E2EA]/45 font-light uppercase tracking-[0.2em] text-[0.65rem]">
          {label}
        </span>
        <span className="truncate text-[#D7E2EA] font-medium">{value}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#D7E2EA]/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D7E2EA]" />
    </motion.a>
  );
}

function ChannelRow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-6 sm:px-10 md:px-14 lg:px-20 py-24 sm:py-32 md:py-44 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <ContactGlow />

      <h2
        className="hero-heading font-black uppercase leading-[0.95] tracking-tight text-center"
        style={{ fontSize: "clamp(2.75rem, 11vw, 150px)" }}
      >
        <RevealHeading text={"Let's build"} delay={0} />
        <RevealHeading text="something incredible" delay={0.12} />
      </h2>

      <motion.p
        className="mt-10 sm:mt-14 md:mt-16 text-[#D7E2EA] font-light uppercase tracking-[0.25em] max-w-[420px] leading-snug"
        style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.15rem)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
      >
        have a project in mind? I&apos;d love to hear about it
      </motion.p>

      <motion.div
        className="mt-12 sm:mt-16 flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
      >
        <Magnet strength={0.26} padding={90}>
          <ContactButton href={MAILTO} label="Email Me" />
        </Magnet>
        <p className="text-[#D7E2EA]/50 font-light tracking-wide break-all">
          {EMAIL}
        </p>
      </motion.div>

      <div className="mt-16 sm:mt-20 w-full max-w-[560px] flex flex-col gap-3 text-left">
        <ChannelRow>
          <div className="group flex items-center gap-4 rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.02] px-6 py-5 transition-colors duration-300 hover:border-[#D7E2EA]/50 hover:bg-white/[0.06]">
            <motion.span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA]"
              whileHover={{ rotate: -10, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <Mail className="h-5 w-5" />
            </motion.span>
            <a
              href={MAILTO}
              className="flex min-w-0 flex-1 flex-col no-underline"
            >
              <span className="text-[#D7E2EA]/45 font-light uppercase tracking-[0.2em] text-[0.65rem]">
                Email
              </span>
              <span className="truncate text-[#D7E2EA] font-medium">
                {EMAIL}
              </span>
            </a>
            <CopyEmailButton />
          </div>
        </ChannelRow>

        <ChannelRow>
          <ChannelLink href={GITHUB_URL} label="GitHub" value="Ne-x-us-vault">
            <GithubIcon className="h-5 w-5" />
          </ChannelLink>
        </ChannelRow>

        <ChannelRow>
          <ChannelLink
            href={LINKEDIN_URL}
            label="LinkedIn"
            value="in/jaswa-j-r"
          >
            <LinkedinIcon className="h-5 w-5" />
          </ChannelLink>
        </ChannelRow>

        <ChannelRow>
          <div className="flex items-center gap-4 rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.02] px-6 py-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA]">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-[#D7E2EA]/45 font-light uppercase tracking-[0.2em] text-[0.65rem]">
                Based in
              </span>
              <span className="truncate text-[#D7E2EA] font-medium">
                {LOCATION}
              </span>
            </span>
          </div>
        </ChannelRow>
      </div>
    </section>
  );
}