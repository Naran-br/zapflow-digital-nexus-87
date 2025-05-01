
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";

// Individual particle
const Particle = ({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
};

// Mouse follower particle effect
const MouseParticles = () => {
  const particleCount = 200;
  const isMobile = useIsMobile();
  
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ] as [number, number, number],
      color: Math.random() > 0.6 ? "#01f05a" : "#ffffff",
      speed: 0.5 + Math.random() * 0.5
    }));
  }, []);

  return (
    <>
      {isMobile 
        ? particles.slice(0, particleCount / 3).map((particle, i) => (
            <Particle 
              key={i} 
              position={particle.position} 
              color={particle.color} 
              speed={particle.speed} 
            />
          ))
        : particles.map((particle, i) => (
            <Particle 
              key={i} 
              position={particle.position} 
              color={particle.color} 
              speed={particle.speed} 
            />
          ))
      }
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};

// Main particle system component
const ParticleSystem = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <MouseParticles />
      </Canvas>
    </div>
  );
};

export default ParticleSystem;
