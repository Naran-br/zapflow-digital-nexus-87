
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

const Points = () => {
  const count = 2000;
  const isMobile = useIsMobile();
  const actualCount = isMobile ? count / 2 : count;
  
  // Create points
  const points = useMemo(() => {
    const p = new Array(actualCount).fill(0).map((_, i) => {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      return new THREE.Vector3(x, y, z);
    });
    return p;
  }, [actualCount]);

  const bufferRef = useRef<THREE.BufferAttribute>(null!);

  useFrame(({ clock }) => {
    if (!bufferRef.current) return;
    
    const positions = bufferRef.current.array;
    const time = clock.getElapsedTime();
    
    for (let i = 0; i < actualCount; i++) {
      const i3 = i * 3;
      positions[i3] = points[i].x + Math.sin(time + i * 0.1) * 0.3;
      positions[i3 + 1] = points[i].y + Math.cos(time + i * 0.1) * 0.3;
      positions[i3 + 2] = points[i].z;
    }
    
    bufferRef.current.needsUpdate = true;
  });
  
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          ref={bufferRef}
          attach="position"
          count={actualCount}
          array={new Float32Array(actualCount * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#01f05a" transparent opacity={0.6} />
    </points>
  );
};

const LogoBackground = () => {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Points />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default LogoBackground;
