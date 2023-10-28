import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import WebProjects from "../components/webDesign/WebProjects";
import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import ProjectLink from "../components/ProjectLink";

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

        <section className="project-links-section">
          <h2 className="visually-hidden">Our Previous Projects</h2>

          <ProjectLink
            linkClass="project-link--app"
            heading="App Design"
            to="/appdesign"
          />

          <ProjectLink
            linkClass="project-link--graphic"
            heading="Graphic Design"
            to="/graphicdesign"
          />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default WebDesign;
