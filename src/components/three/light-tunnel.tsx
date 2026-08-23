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
  float ang = pos.z * 0.06 + uTime * 0.12;
  float s = sin(ang), c = cos(ang);
  float x = pos.x * c - pos.y * s;
  float y = pos.x * s + pos.y * c;
  pos.x = x; pos.y = y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}
`;
const frag = `
uniform float uTime;
varying vec2 vUv;
void main(){
  vec2 uv = vUv;
  float rings = fract(uv.y * 20.0 - uTime * 1.8);
  float ring = smoothstep(0.0,0.05,rings) * smoothstep(0.12,0.07,rings);
  float glow = ring * 0.9;
  float depthFade = 1.0 - pow(uv.y, 1.2);
  vec3 col = vec3(0.05,0.05,0.07) + vec3(1.0) * glow * 0.55 * depthFade;
  col += vec3(0.45,0.48,1.0) * glow * 0.18;
  float alpha = 0.06 + glow * 0.75 * depthFade;
  gl_FragColor = vec4(col, alpha);
}
`;
function Tunnel() {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const u = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((s) => { if (ref.current) ref.current.uniforms.uTime.value = s.clock.elapsedTime; });
  return (
    <mesh rotation={[Math.PI/2,0,0]}>
      <cylinderGeometry args={[4.2,4.2,28,64,1,true]} />
      <shaderMaterial ref={ref} vertexShader={vert} fragmentShader={frag} uniforms={u} side={THREE.DoubleSide} transparent depthWrite={false} />
    </mesh>
  );
}
function Rings(){
  const g = useRef<THREE.Group>(null);
  useFrame((s)=>{
    if(!g.current) return;
    g.current.children.forEach((c,i)=>{
      const z = ((s.clock.elapsedTime*1.8 + i*1.7)%28)-14;
      c.position.z = z;
      const sc = 1.0 - Math.abs(z)*0.04;
      c.scale.setScalar(Math.max(0.25, sc));
    });
  });
  return (
    <group ref={g}>
      {Array.from({length:10}).map((_,i)=>(
        <mesh key={i} position={[0,0,-10+i*2.2]}>
          <torusGeometry args={[3.15,0.015,10,64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  );
}
export default function LightTunnel(){
  return <group position={[0,0,-2]}><Tunnel /><Rings /></group>;
}
