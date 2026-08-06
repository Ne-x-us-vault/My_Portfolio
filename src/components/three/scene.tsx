"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, Component, type ReactNode, useRef } from "react";
import { 
  EffectComposer, 
  Bloom, 
  Noise, 
  Vignette, 
  ChromaticAberration,
  Scanline
} from "@react-three/postprocessing";
import { Vector2 } from "three";
import * as THREE from "three";
import Particles from "./particles";
import Grid from "./grid";
import NeuralNetwork from "./neural-network";
import FloatingObjects from "./floating-objects";
import Cursor3D from "./cursor-3d";

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

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
      <spotLight 
        position={[0, 10, 0]} 
        intensity={1.5} 
        color="#06B6D4" 
        angle={0.15} 
        penumbra={1} 
      />

      <Particles />
      <Grid />
      <NeuralNetwork />
      <FloatingObjects />
      <Cursor3D />

      <fog attach="fog" args={["#050816", 15, 45]} />

      <EffectComposer enableNormalPass={false}>
        <Bloom 
          intensity={1.5} 
          luminanceThreshold={0.1} 
          luminanceSmoothing={0.9} 
          mipmapBlur 
        />
        <ChromaticAberration 
          offset={new Vector2(0.002, 0.002)} 
          radialModulation={false}
          modulationOffset={0}
        />
        <Noise opacity={0.05} />
        <Scanline opacity={0.01} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>

      <Rig />
    </>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 bg-[#050816]">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          dpr={[1, 2]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <SceneContent />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
