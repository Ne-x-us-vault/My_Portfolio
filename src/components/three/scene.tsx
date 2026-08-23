"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, Component, type ReactNode, useState, useEffect } from "react";
import * as THREE from "three";
import WaterWave from "./water-wave";
import GridWave from "./grid-wave";
import LightTunnel from "./light-tunnel";
import CursorOrb from "./cursor-orb";
import FloatingCharms from "./floating-charms";

class EB extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? null : this.props.children; }
}

function Rig({ v }: { v: string }) {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() => {
    const s = v === "tunnel" ? 0.5 : 0.85;
    camera.position.lerp(vec.set(mouse.x * s, mouse.y * s * 0.55, camera.position.z), 0.045);
    camera.lookAt(0, 0, -1.2);
  });
}

function Content({ variant }: { variant: "water" | "grid" | "tunnel" }) {
  return (
    <>
      <ambientLight intensity={0.58} />
      <directionalLight position={[4, 7, 5]} intensity={0.9} color="#ffffff" />
      <pointLight position={[0, 5, 3]} intensity={1.1} color="#8a8cff" />
      <pointLight position={[-4, 2, 2]} intensity={0.45} color="#00D9FF" />
      {variant === "water" && <WaterWave />}
      {variant === "grid" && <GridWave />}
      {variant === "tunnel" && <LightTunnel />}
      <FloatingCharms />
      <CursorOrb />
      <fog attach="fog" args={["#08080A", 12, 30]} />
      <Rig v={variant} />
    </>
  );
}

export default function Scene() {
  const [v, setV] = useState<"water" | "grid" | "tunnel">("water");

  // subtle auto-rotate hint every 8s if user idle
  useEffect(() => {
    const id = setInterval(() => {
      // no auto switch – keeps user in control, but we could pulse
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <EB>
        <Canvas
          camera={{ position: [0, 1.9, 9], fov: 50 }}
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance", stencil: false, depth: true }}
          style={{ background: "transparent" }}
          // allow canvas to receive pointer events for R3F mouse
          eventSource={typeof document !== "undefined" ? document.documentElement : undefined}
          eventPrefix="client"
        >
          <Suspense fallback={null}>
            <Content variant={v} />
          </Suspense>
        </Canvas>
      </EB>

      {/* ambient overlays — passion crafted */}
      <div className="pointer-events-none absolute inset-0 bg-[#08080A]/18" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#08080A] via-transparent to-[#08080A]" style={{ opacity: 0.58 }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(78% 65% at 50% 38%, transparent 42%, #08080A 92%)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080A] via-[#08080A]/70 to-transparent" />

      {/* switcher — passion: pill with active indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/35 p-1.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] sm:bottom-8">
        {[
          { k: "water", l: "Water", sub: "01" },
          { k: "grid", l: "Gridwave", sub: "02" },
          { k: "tunnel", l: "Tunnel", sub: "03" },
        ].map((o) => (
          <button
            key={o.k}
            onClick={() => setV(o.k as any)}
            data-cursor="hover"
            className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[10px] tracking-[0.14em] transition-all ${v === o.k ? "bg-white text-black shadow-[0_2px_10px_rgba(255,255,255,0.25)]" : "text-white/55 hover:bg-white/10 hover:text-white"}`}
          >
            <span className={`text-[9px] opacity-40 ${v === o.k ? "opacity-40" : ""}`}>{o.sub}</span>
            {o.l}
          </button>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
