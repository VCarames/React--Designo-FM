import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import WebProjects from "../components/webDesign/WebProjects";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";

function WebDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          heading="Web Design"
          text="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
        />
        <WebProjects />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default WebDesign;
