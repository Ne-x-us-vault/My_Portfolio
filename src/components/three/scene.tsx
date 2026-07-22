"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, Component, type ReactNode } from "react";
import Particles from "./particles";
import Grid from "./grid";
import NeuralNetwork from "./neural-network";
import FloatingObjects from "./floating-objects";

class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7C3AED" />

      <Particles />
      <Grid />
      <NeuralNetwork />
      <FloatingObjects />

      <fog attach="fog" args={["#050816", 10, 40]} />
    </>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <Suspense fallback={null}>
            <SceneContent />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
