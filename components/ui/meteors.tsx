import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({ number }: { number?: number }) => {
  const meteors = new Array(number || 30).fill(true);
  
  const meteorColors = [
    { color: "#FF69B4", shadow: "rgba(255, 105, 180, 0.3)" },
    { color: "#4169E1", shadow: "rgba(65, 105, 225, 0.3)" },
    { color: "#9370DB", shadow: "rgba(147, 112, 219, 0.3)" },
    { color: "#00FA9A", shadow: "rgba(0, 250, 154, 0.3)" },
    { color: "#FFA500", shadow: "rgba(255, 165, 0, 0.3)" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((_, idx) => {
        const randomColorObj = meteorColors[Math.floor(Math.random() * meteorColors.length)];
        
        return (
          <span
            key={idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] blur-[1px]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[40px] before:-translate-y-[50%] before:transform before:content-[''] before:blur-[2px]",
            )}
            style={{
              top: 0,
              left: Math.floor(Math.random() * (1000 - -1000) + -1000),
              animationDelay: Math.random() * 15 + "s",
              animationDuration: Math.floor(Math.random() * 10 + 20) + "s",
              background: `linear-gradient(to right, ${randomColorObj.color}, transparent)`,
              boxShadow: `0 0 10px ${randomColorObj.shadow}`,
              opacity: 0.8
            }}
          >
            <span 
              className="absolute top-1/2 h-[1px] w-[40px] -translate-y-1/2"
              style={{
                background: `linear-gradient(to right, ${randomColorObj.color}, transparent)`
              }}
            />
          </span>
        );
      })}
    </div>
  );
};

export default Meteors; 