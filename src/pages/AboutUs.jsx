import React from "react";
import AboutUsSection from "../component/AboutUsSection";
import SEO from "../component/SEO";

function AboutUs() {
  return (
    <>
      <SEO 
        title="About Us - FitCrypt | Privacy-First Fitness"
        description="Learn about FitCrypt's mission to provide secure, private fitness tracking. We believe your health data belongs to you and only you."
        keywords="about fitcrypt, fitness privacy mission, secure health data team"
        url="https://fitcrypt.app/about-us"
      />
      <AboutUsSection />
    </>
  );
}

export default AboutUs;
