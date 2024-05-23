// components/NoiseFilter.js

import React from "react";

const NoiseFilter = () => (
  <svg width="0" height="0">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
  </svg>
);

export default NoiseFilter;
