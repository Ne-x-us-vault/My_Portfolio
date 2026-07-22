"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 30;
  const connectionCount = 40;

  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
      ] as [number, number, number],
    }));
  }, []);

  const connections = useMemo(() => {
    const lines: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < connectionCount; i++) {
      const a = nodes[Math.floor(Math.random() * nodeCount)];
      const b = nodes[Math.floor(Math.random() * nodeCount)];
      if (a !== b) {
        lines.push({ start: a.position, end: b.position });
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.position}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#06B6D4" transparent opacity={0.7} />
        </mesh>
      ))}
      {connections.map((conn, i) => (
        <Line
          key={`conn-${i}`}
          points={[conn.start, conn.end]}
          color="#3B82F6"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}
