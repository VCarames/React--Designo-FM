import Header from "../components/Header";
import Hero from "../components/home/Hero";

import CTA from "../components/CTA";
import Footer from "../components/Footer/Footer";
import Benefits from "../components/home/Benefits";
import ProjectLink from "../components/ProjectLink";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section>
          <h2 className="visually-hidden">Our Previous Projects</h2>
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

          <ProjectLink
            linkClass="project-link--graphic"
            heading="Graphic Design"
            to="/graphicdesign"
          />
        </section>
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
