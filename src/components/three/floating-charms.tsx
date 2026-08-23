"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Charm({ pos, scale, speed, color }: { pos: [number, number, number]; scale: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime * speed;
    ref.current.rotation.y = t * 0.5;
    ref.current.rotation.x = t * 0.3;
    // mouse repulsion — subtle parallax
    ref.current.position.y = pos[1] + Math.sin(t) * 0.22;
  });
  return (
    <Float speed={1.2 + speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={pos} scale={scale}>
        <octahedronGeometry args={[0.28]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} wireframe transparent opacity={0.28} />
      </mesh>
    </Float>
  );
}

export default function FloatingCharms() {
  return (
    <group>
      <Charm pos={[-5.2, 1.8, -2.2]} scale={1.1} speed={0.42} color="#7A7CFF" />
      <Charm pos={[5.6, -1.2, -3.0]} scale={0.9} speed={0.55} color="#00D9FF" />
      <Charm pos={[0.8, 3.2, -4.2]} scale={1.35} speed={0.33} color="#ffffff" />
      <Charm pos={[-3.8, -2.6, -2.8]} scale={0.75} speed={0.62} color="#7A7CFF" />
      <mesh position={[2.2, -2.0, -2]} scale={0.6}>
        <icosahedronGeometry args={[0.35, 1]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.08} wireframe />
      </mesh>
    </group>
  );
}
