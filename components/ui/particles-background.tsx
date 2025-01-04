"use client";

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: ["#FF69B4", "#4169E1", "#7B68EE", "#00FA9A", "#FFA500"]
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.8,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.6,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.8
              }
            }
          }
        }
      }}
    />
  );
} 