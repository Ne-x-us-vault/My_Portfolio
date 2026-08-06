"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

function Node({ position }: { position: [number, number, number] }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const s = hovered ? 1.5 + Math.sin(state.clock.elapsedTime * 10) * 0.2 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial 
        color={hovered ? "#22D3EE" : "#06B6D4"} 
        emissive={hovered ? "#22D3EE" : "#06B6D4"}
        emissiveIntensity={hovered ? 5 : 1}
        transparent 
        opacity={0.8} 
      />
    </mesh>
  );
}

function Connection({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const lineRef = useRef<any>(null);

  useFrame((state) => {
    if (!lineRef.current) return;
    lineRef.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2 + Math.random()) * 0.05;
  });

  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color="#3B82F6"
      lineWidth={0.8}
      transparent
      opacity={0.15}
      blending={THREE.AdditiveBlending}
    />
  );
}

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 40;
  const connectionCount = 60;

  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, () => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
    }));
  }, []);

  const connections = useMemo(() => {
    const lines: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < connectionCount; i++) {
      const idxA = Math.floor(Math.random() * nodeCount);
      const idxB = Math.floor(Math.random() * nodeCount);
      if (idxA !== idxB) {
        lines.push({ start: nodes[idxA].position, end: nodes[idxB].position });
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Node key={`node-${i}`} position={node.position} />
      ))}
      {connections.map((conn, i) => (
        <Connection key={`conn-${i}`} start={conn.start} end={conn.end} />
      ))}
    </group>
  );
}
