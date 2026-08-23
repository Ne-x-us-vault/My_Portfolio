"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const vert = `
uniform float uTime;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec3 pos = position;
  float wave = sin(pos.x*0.20 + uTime*0.5)*0.9 + sin(pos.y*0.16 - uTime*0.4)*0.7 + sin((pos.x+pos.y)*0.10 + uTime*0.65)*0.4;
  pos.z += wave;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}
`;
const frag = `
varying vec2 vUv;
void main(){
  vec2 g = fract(vUv * 26.0);
  float line = step(0.988, g.x) + step(0.988, g.y);
  float fade = 1.0 - length(vUv-0.5)*0.85;
  vec3 col = vec3(1.0);
  float alpha = clamp(line * fade * 0.9, 0.0, 1.0);
  alpha = max(alpha, 0.02 * fade);
  gl_FragColor = vec4(col, alpha * 0.65);
}
`;
export default function GridWave() {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const u = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((s) => { if (ref.current) ref.current.uniforms.uTime.value = s.clock.elapsedTime; });
  return (
    <mesh rotation={[-Math.PI / 2.22, 0, 0]} position={[0, -0.7, -0.5]}>
      <planeGeometry args={[28, 28, 90, 90]} />
      <shaderMaterial ref={ref} vertexShader={vert} fragmentShader={frag} uniforms={u} transparent depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  );
}
