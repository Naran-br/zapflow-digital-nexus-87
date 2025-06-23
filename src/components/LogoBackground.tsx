
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const LogoBackground = () => {
  const isMobile = useIsMobile();
  const pointCount = isMobile ? 30 : 60;

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <div className="relative w-full h-full">
        {Array.from({ length: pointCount }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-zapflow-500 opacity-50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
        {Array.from({ length: Math.floor(pointCount / 2) }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-zapflow-500 to-transparent opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: '1px',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `pulse ${Math.random() * 4 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoBackground;
