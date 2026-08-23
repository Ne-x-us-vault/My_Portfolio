"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vert = `
uniform float uTime;
varying vec2 vUv;
varying float vWave;
varying vec3 vNormal;
void main(){
  vUv = uv;
  vec3 pos = position;
  float w1 = sin(pos.x * 0.28 + uTime * 0.55) * 0.85;
  float w2 = sin(pos.y * 0.32 - uTime * 0.45) * 0.65;
  float w3 = sin((pos.x+pos.y)*0.16 + uTime*0.7) * 0.45;
  float w = w1 + w2 + w3;
  pos.z += w;
  vWave = w;
  float nx = cos(pos.x*0.28+uTime*0.55)*0.28;
  float ny = cos(pos.y*0.32 - uTime*0.45)*0.32;
  vNormal = normalize(vec3(-nx, -ny, 1.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}
`;
const frag = `
uniform float uTime;
varying vec2 vUv;
varying float vWave;
varying vec3 vNormal;
void main(){
  vec2 uv = vUv;
  vec3 viewDir = vec3(0.0,0.0,1.0);
  float fresnel = pow(1.0 - max(dot(vNormal, viewDir),0.0), 2.0);
  vec3 colA = vec3(0.06,0.06,0.08);
  vec3 colB = vec3(0.13,0.13,0.15);
  vec3 colC = vec3(0.92,0.92,0.96);
  vec3 base = mix(colA, colB, smoothstep(-0.9,0.9,vWave));
  base = mix(base, colC, fresnel*0.42);
  float streak = pow(max(sin(uv.x*5.0 + uTime*0.35 + vWave*0.6),0.0), 22.0) * 0.22;
  base += streak;
  float vig = 1.0 - length(uv-0.5)*0.55;
  base *= vig;
  gl_FragColor = vec4(base, 1.0);
}
`;
export default function WaterWave() {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((s) => { if (ref.current) ref.current.uniforms.uTime.value = s.clock.elapsedTime; });
  return (
    <mesh rotation={[-Math.PI / 2.35, 0, 0]} position={[0, -0.8, 0]}>
      <planeGeometry args={[30, 30, 130, 130]} />
      <shaderMaterial ref={ref} vertexShader={vert} fragmentShader={frag} uniforms={uniforms} side={THREE.DoubleSide} />
    </mesh>
  );
}
