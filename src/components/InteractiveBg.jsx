import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleRing() {
  const ref = useRef();
  
  // Create sphere distribution of points
  const points = useMemo(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.2; // Sphere radius
      
      arr[idx] = r * Math.sin(phi) * Math.cos(theta);
      arr[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[idx + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  // Slowly rotate particles in space
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

function FloatingPurpleParticles() {
  const ref = useRef();
  
  const points = useMemo(() => {
    const count = 800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.8; // Larger radius
      
      arr[idx] = r * Math.sin(phi) * Math.cos(theta);
      arr[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[idx + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.015;
      ref.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, -Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#b026ff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export default function InteractiveBg() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-[#020617] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1.2], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.5} />
        <ParticleRing />
        <FloatingPurpleParticles />
      </Canvas>
    </div>
  );
}
