import ContactButton from "../components/ContactButton";
import FadeIn from "../components/FadeIn";

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
        <div className="mt-12 sm:mt-16">
          <ContactButton />
        </div>
      </FadeIn>
    </section>
  );
}