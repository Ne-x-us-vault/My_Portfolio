"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassSphere({ position, size, color = "#3B82F6" }: { position: [number, number, number]; size: number; color?: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    const targetScale = hovered ? 1.2 : 1;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh 
        ref={ref} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.2}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor={color}
          color={color}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function WireframeCube({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    const targetScale = hovered ? 1.3 : 1;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh 
        ref={ref} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[size, size, size]} />
        <MeshDistortMaterial
          color={hovered ? "#A78BFA" : "#7C3AED"}
          wireframe
          transparent
          opacity={0.4}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function Octahedron({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    const targetScale = hovered ? 1.4 : 1;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh 
        ref={ref} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[size]} />
        <meshStandardMaterial
          color={hovered ? "#22D3EE" : "#06B6D4"}
          wireframe
          transparent
          opacity={0.3}
          emissive={hovered ? "#22D3EE" : "#06B6D4"}
          emissiveIntensity={hovered ? 2 : 0.5}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects() {
  return (
    <group>
      <GlassSphere position={[-8, 2, -5]} size={1.5} color="#3B82F6" />
      <GlassSphere position={[8, -3, -8]} size={1} color="#60A5FA" />
      <GlassSphere position={[0, 5, -12]} size={2} color="#2563EB" />

      <WireframeCube position={[6, 4, -6]} size={1.2} />
      <WireframeCube position={[-7, -2, -10]} size={0.8} />

      <Octahedron position={[-4, 6, -7]} size={0.7} />
      <Octahedron position={[10, 0, -9]} size={0.5} />
      <Octahedron position={[2, -6, -5]} size={0.6} />
    </group>
  );
}
