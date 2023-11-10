import React from "react";
import Header from "../components/header/Header";
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

        <section className="project-link-section project-link-section--web">
          <h2 className="visually-hidden">Our Previous Projects</h2>
          <div className="project-link-section__content project-link-section__content--web">
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
          </div>
        </section>
        <CTA sectionClass="cta-section--web" />
      </main>
      <Footer />
    </div>
  );
}

export default WebDesign;
