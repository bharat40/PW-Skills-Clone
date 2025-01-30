import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-auto">
      <img src="./heroImage.jpg" alt="" className="w-full hidden md:block" />
      <img src="./heroImageMobile.jpg" alt="" className="w-full md:hidden" />
    </section>
  );
};

export default HeroSection;
