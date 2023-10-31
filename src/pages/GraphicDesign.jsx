import Header from "../components/header/Header";

import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";

import GraphicProjects from "../components/graphicDesign/GraphicProjects";
import ProjectLink from "../components/ProjectLink";

function GraphicDesign() {
  return (
    <div>
      <Header />

      <main>
        <Intro
          heading="Graphic Design"
          text="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives.
        "
        />

        <GraphicProjects />

        <section className="project-link-section">
          <h2 className="visually-hidden">Our Previous Projects</h2>
          <div className="project-link-section__content project-link-section__content--graphic">
            <ProjectLink
              linkClass="project-link--web"
              heading="Web Design"
              to="/webdesign"
            />
            <ProjectLink
              linkClass="project-link--app"
              heading="App Design"
              to="/appdesign"
            />
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default GraphicDesign;
