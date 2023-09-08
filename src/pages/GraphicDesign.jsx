import Header from "../components/Header";

import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";

import GraphicProjects from "../components/graphicDesign/GraphicProjects";
import ProjectLinks from "../components/ProjectLinks";

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

        <ProjectLinks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default GraphicDesign;
