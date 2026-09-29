import { useState, type ReactNode } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import ContactButton from "../components/ContactButton";
import FadeIn from "../components/FadeIn";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  MAILTO,
} from "../contact";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

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
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/25 p-2 text-[#D7E2EA]/70 transition-colors duration-200 hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA]"
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
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
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.02] px-6 py-5 transition-colors duration-200 hover:border-[#D7E2EA]/40 hover:bg-white/[0.05]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA]">
        {children}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[#D7E2EA]/45 font-light uppercase tracking-[0.2em] text-[0.65rem]">
          {label}
        </span>
        <span className="truncate text-[#D7E2EA] font-medium">{value}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#D7E2EA]/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D7E2EA]" />
    </a>
  );
}

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-6 sm:px-10 md:px-14 lg:px-20 py-24 sm:py-32 md:py-44 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div
        className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#B600A8]/20 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#BE4C00]/20 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-[0.95] tracking-tight text-center"
          style={{ fontSize: "clamp(2.75rem, 11vw, 150px)" }}
        >
          Let&apos;s build
          <br />
          something incredible
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="mt-10 sm:mt-14 md:mt-16 text-[#D7E2EA] font-light uppercase tracking-[0.25em] max-w-[420px] leading-snug"
          style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.15rem)" }}
        >
          have a project in mind? I&apos;d love to hear about it
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-5">
          <ContactButton href={MAILTO} label="Email Me" />
          <p className="text-[#D7E2EA]/50 font-light tracking-wide break-all">
            {EMAIL}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} y={24}>
        <div className="mt-16 sm:mt-20 w-full max-w-[560px] flex flex-col gap-3 text-left">
          <div className="group flex items-center gap-4 rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.02] px-6 py-5 transition-colors duration-200 hover:border-[#D7E2EA]/40 hover:bg-white/[0.05]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA]">
              <Mail className="h-5 w-5" />
            </span>
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

          <ChannelLink href={GITHUB_URL} label="GitHub" value="Ne-x-us-vault">
            <GithubIcon className="h-5 w-5" />
          </ChannelLink>

          <ChannelLink
            href={LINKEDIN_URL}
            label="LinkedIn"
            value="in/jaswa-j-r"
          >
            <LinkedinIcon className="h-5 w-5" />
          </ChannelLink>

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
        </div>
      </FadeIn>
    </section>
  );
}
