
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ParticleSystem = () => {
  const isMobile = useIsMobile();
  const particleCount = isMobile ? 50 : 100;

  return (
    <div className="absolute inset-0 z-0 opacity-70 overflow-hidden">
      <div className="relative w-full h-full">
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
        {Array.from({ length: Math.floor(particleCount / 4) }).map((_, i) => (
          <div
            key={`green-${i}`}
            className="absolute rounded-full bg-zapflow-500 opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleSystem;
