"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Cursor3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !ringRef.current) return;

    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    meshRef.current.position.lerp(new THREE.Vector3(x, y, 0), 0.2);
    ringRef.current.position.lerp(new THREE.Vector3(x, y, 0), 0.1);

    meshRef.current.rotation.x = state.clock.elapsedTime * 2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 2;
    
    ringRef.current.rotation.z = state.clock.elapsedTime;
    const s = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.1;
    ringRef.current.scale.set(s, s, s);
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.15]} />
        <meshStandardMaterial 
          color="#3B82F6" 
          emissive="#3B82F6" 
          emissiveIntensity={10} 
        />
      </mesh>
      <mesh ref={ringRef}>
        <ringGeometry args={[0.3, 0.35, 32]} />
        <meshStandardMaterial 
          color="#06B6D4" 
          emissive="#06B6D4" 
          emissiveIntensity={5} 
          transparent 
          opacity={0.5} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
