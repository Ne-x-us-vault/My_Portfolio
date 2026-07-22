"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Grid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.z = -state.clock.elapsedTime * 0.5 % 5;
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[100, 50, "#3B82F6", "#1e3a5f"]}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}
