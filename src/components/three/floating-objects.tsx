"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassSphere({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color="#3B82F6"
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function WireframeCube({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial
          color="#7C3AED"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

function Octahedron({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[size]} />
        <meshBasicMaterial
          color="#06B6D4"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects() {
  return (
    <group>
      <GlassSphere position={[-8, 2, -5]} size={1.5} />
      <GlassSphere position={[8, -3, -8]} size={1} />
      <GlassSphere position={[0, 5, -12]} size={2} />

      <WireframeCube position={[6, 4, -6]} size={1.2} />
      <WireframeCube position={[-7, -2, -10]} size={0.8} />

      <Octahedron position={[-4, 6, -7]} size={0.7} />
      <Octahedron position={[10, 0, -9]} size={0.5} />
    </group>
  );
}
