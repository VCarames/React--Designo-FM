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

        <section className="project-link-section">
          <h2 className="visually-hidden">Our Previous Projects</h2>
          <div className="project-link-section__content">
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
          </div>
        </section>
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
