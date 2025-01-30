import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OurStudents from "../components/OurStudents";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";

const Body = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurStudents />
      <OurProducts />
      <Footer />
    </>
  );
};

export default Body;
