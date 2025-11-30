import React from 'react';

// NOTE: In a real project, you would need to replace the src paths
// with the actual image files accessible in your public or assets folder.
const NIBIRU_MAIN_IMAGE = "https://nibiru.fi/_astro/main-hero.KDyzCBob.png";
const NIBIRU_SOLO_CUBE = "https://nibiru.fi/_astro/floating-solo-cube.C-c1nzt5.svg";

const HeroSection = () => {
  return (
   <>
<div className="hero-heading-container">
  <h1 className="hero-heading">
    Nibiru is where<br />
    Yield Lives
  </h1>
</div>


   </>
  );
};

export default HeroSection;