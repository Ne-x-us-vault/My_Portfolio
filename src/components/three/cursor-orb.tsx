"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";

export default function CursorOrb() {
  const ref = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  const target = new THREE.Vector3();
  const lerped = new THREE.Vector3();

  useFrame((state) => {
    if (!ref.current || !coreRef.current || !ringRef.current) return;
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    target.set(x, y, 1.2);
    lerped.lerp(target, 0.07);
    ref.current.position.copy(lerped);

    const t = state.clock.elapsedTime;
    coreRef.current.rotation.y = t * 0.7;
    coreRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    ringRef.current.rotation.z = t * 0.6;
    ringRef.current.rotation.x = Math.sin(t * 0.35) * 0.4;

    const s = 1 + Math.sin(t * 1.8) * 0.06;
    coreRef.current.scale.setScalar(s);
  });

  return (
    <group ref={ref}>
      {/* chrome character orb — million dollar */}
      <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.25}>
        <mesh ref={coreRef}>
          <sphereGeometry args={[0.28, 64, 64]} />
          <MeshTransmissionMaterial
            transmission={0.98}
            thickness={0.35}
            roughness={0.08}
            chromaticAberration={0.06}
            anisotropy={0.12}
            distortion={0.12}
            distortionScale={0.18}
            temporalDistortion={0.15}
            ior={1.4}
            color="#ffffff"
            attenuationColor="#7A7CFF"
            attenuationDistance={0.6}
            backside={false}
          />
        </mesh>
        {/* inner glow core */}
        <mesh scale={0.62}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial color="#7A7CFF" emissive="#7A7CFF" emissiveIntensity={1.4} transparent opacity={0.9} />
        </mesh>
      </Float>

      {/* orbiting ring — follows cursor */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.52, 0.012, 16, 80]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.38} />
      </mesh>
      {/* second ring */}
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[0.62, 0.008, 12, 64]} />
        <meshBasicMaterial color="#00D9FF" transparent opacity={0.18} />
      </mesh>
      {/* point light that follows */}
      <pointLight intensity={1.2} color="#7A7CFF" distance={3} decay={2} />
    </group>
  );
}
