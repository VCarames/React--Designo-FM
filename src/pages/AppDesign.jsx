import Header from "../components/Header";

import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro";

import AppProjects from "../components/appDesign/AppProjects";
import ProjectLink from "../components/ProjectLink";

function AppDesign() {
  return (
    <div>
      <Header />
      <main>
        <Intro
          heading="App Design"
          text="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
        />

        <AppProjects />
        <section>
          <h2 className="visually-hidden">Our Previous Projects</h2>
          <ProjectLink
            linkClass="project-link--web"
            heading="Web Design"
            to="/webdesign"
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

export default AppDesign;
