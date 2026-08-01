export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div className="absolute -left-[15%] -top-[30%] h-[70vh] w-[70vw] rounded-full bg-accent-primary/15 blur-[110px] animate-aurora" />
      <div className="absolute -bottom-[30%] -right-[15%] h-[70vh] w-[70vw] rounded-full bg-accent-secondary/15 blur-[110px] animate-aurora-reverse" />
      <div className="absolute left-1/2 top-1/2 h-[45vh] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-highlight/10 blur-[130px]" />
    </div>
  );
}
