import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      params={{
        pauseOnOutsideViewport:true,
        particles: {
          number: {
            value: 30,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
            detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}

export default Particle;