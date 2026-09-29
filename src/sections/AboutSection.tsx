import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import FadeIn from "../components/FadeIn";

const ABSOLUTE_IMAGES = [
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "Moon icon",
    className:
      "w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    delay: 0.1,
    x: -80,
  },
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "3D object",
    className:
      "w-[100px] sm:w-[140px] md:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    delay: 0.25,
    x: -80,
  },
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "Lego icon",
    className:
      "w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    delay: 0.15,
    x: 80,
  },
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "3D group",
    className:
      "w-[130px] sm:w-[170px] md:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    delay: 0.3,
    x: 80,
  },
];

const ABOUT_TEXT =
  "i build across mobile applications, ui/ux, and embedded systems, with a growing focus on robotics and devops. i favor practical, bolt-on solutions over full system rebuilds, and i work fastest under a deadline -- most of my shipped projects started as hackathon builds. based in tamil nadu, india.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {ABSOLUTE_IMAGES.map((img) => (
        <FadeIn
          key={img.url}
          delay={img.delay}
          x={img.x}
          y={0}
          duration={0.9}
          className={img.className}
        >
          <img src={img.url} alt={img.alt} className="w-full h-auto" />
        </FadeIn>
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <FadeIn delay={0.1} y={20}>
            <AnimatedText
              text={ABOUT_TEXT}
              className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            />
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}